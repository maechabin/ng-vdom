import { ComponentRef, IterableDiffer, KeyValueDiffer, Type } from '@angular/core'
import { Component } from './component'

export type ClassComponentType<P = any> = new (props: P) => Component

export type FunctionComponentType<P = any> = (props: P) => NodeDef

export interface ElementDef<P = any> {
  type: string | ClassComponentType<P> | FunctionComponentType<P> | Type<any>
  children: ChildDef[]
  props: P | null
}

export type TextDef = string | number

export type VoidDef = boolean | null | undefined

export type NodeDef = ElementDef | TextDef | VoidDef

export type ChildDef = NodeDef | NodeDef[]

export type Key = string | number

export interface Attributes {
  key?: Key
}

export interface ClassAttributes {
  ref?: unknown
}

export const ANGULAR_INPUT_MAP = 0
export const ANGULAR_OUTPUT_MAP = 1
export const CHILD_ANCHOR = 2
export const CHILD_DIFFER = 3
export const COMPONENT_INSTANCE = 4
export const COMPONENT_REF = 5
export const PROP_DIFFER = 6
export const RENDER_RESULT = 7
export const STYLE_DIFFER = 8

export interface VNodeMeta extends Array<unknown> {
  [ANGULAR_INPUT_MAP]?: { [key: string]: string }
  [ANGULAR_OUTPUT_MAP]?: { [key: string]: string }
  [CHILD_ANCHOR]?: Node
  [CHILD_DIFFER]?: IterableDiffer<VNode>
  [COMPONENT_INSTANCE]?: Component
  [COMPONENT_REF]?: ComponentRef<any>
  [PROP_DIFFER]?: KeyValueDiffer<string, unknown>
  [RENDER_RESULT]?: VNode
  [STYLE_DIFFER]?: KeyValueDiffer<string, string>
}

export interface VNode<P = any> {
  type: string | ClassComponentType<P> | FunctionComponentType<P> | null
  children: VNode[] | null
  key: Key | null
  props: P
  flags: number
  native: Node | null
  meta: VNodeMeta | null
}

export interface Properties {
  [name: string]: unknown
}

export interface Styles {
  [name: string]: string
}

export type StateChange<S, P> = Partial<S> | ((s: S, p: P) => S)

export type ChildDiffer = IterableDiffer<VNode>
