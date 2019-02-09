import { createEmptyMeta, normalize } from '../shared/node'
import { RenderKit } from '../shared/render-kit'
import { FunctionComponentType, Properties, RENDER_RESULT, VNode } from '../shared/types'
import { mount } from './mount'
import { patch } from './patch'
import { unmount } from './unmount'
import { createPropsChildren } from './util'

export function mountFunctionComponent(kit: RenderKit, vNode: VNode, container: Element | null, nextNode: Node | null): void {
  const type = vNode.type as FunctionComponentType
  const props = vNode.props as Properties | null
  const children = vNode.children ? createPropsChildren(vNode.children) : null
  const meta = (vNode.meta = createEmptyMeta())
  const inner = (meta[RENDER_RESULT] = normalize(type({ ...props, children })))

  mount(kit, inner, container, nextNode)
  vNode.native = inner.native
}

export function patchFunctionComponent(kit: RenderKit, lastVNode: VNode, nextVNode: VNode): void {
  const meta = nextVNode.meta = lastVNode.meta!

  const type = nextVNode.type as FunctionComponentType
  const props = nextVNode.props as Properties
  const children = (props && props.c) || null
  const lastInner = meta[RENDER_RESULT]!
  const nextInner = (meta[RENDER_RESULT] = normalize(type({ ...props, children })))

  patch(kit, lastInner, nextInner)
  nextVNode.native = nextInner.native
}

export function unmountFunctionComponent(kit: RenderKit, vNode: VNode): void {
  unmount(kit, vNode.meta![RENDER_RESULT]!)
}
