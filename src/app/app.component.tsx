import { Component, OnDestroy, OnInit, Input } from '@angular/core'
import { Component as C, createElement as h, Renderable } from 'ng-vdom'
import { HelloComponent } from './hello.component'

@Component({
  selector: 'app-root',
  template: '',
  styleUrls: ['./app.component.css'],
})
export class AppComponent extends Renderable implements OnInit, OnDestroy {
  title = 'app'
  name = 'Angular'
  timerID!: number
  date: Date = new Date()

  ngOnInit(): void {
    this.timerID = setInterval(() => this.tick(), 1000) as any
  }

  ngOnDestroy(): void {
    clearInterval(this.timerID)
  }

  tick() {
    this.date = new Date()
  }

  handleClick() {
    this.title = 'ng-vdom'
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <h1>Welcome to {this.title}!</h1>
          <img
            width="300"
            alt="Angular Logo"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="
          />
          <div>
            <button onClick={this.handleClick.bind(this)}>Change title to ng-vdom</button>
          </div>
        </div>
        <HelloComponent name={this.name} />

        {/** Function Component */}
        <FunctionComponent title={this.title}>
          <h3>Here is Children</h3>
          <div className="function-component">
            <a href="https://github.com/trotyl/ng-vdom">ng-vdom</a>
          </div>
        </FunctionComponent>

        {/** Class Component */}
        <ClassComponent title={this.title}>
          <h3>Here is Children</h3>
          <div className="class-component">
            <a href="https://github.com/trotyl/ng-vdom">ng-vdom</a>
          </div>
        </ClassComponent>

        {/** Angular Component */}
        <AngularComponent title={this.title}>
          <h3>Here is Children</h3>
          <div className="angular-component">
            <a href="https://github.com/trotyl/ng-vdom">ng-vdom</a>
          </div>
        </AngularComponent>
      </div>
    )
  }
}

/** Function Component */
function FunctionComponent(props: any) {
  const { title, children } = props
  return (
    <div>
      <h2>Function Component</h2>
      <p>props.title => {title}</p>
      <div>{children}</div>
    </div>
  )
}

/** Class Component */
class ClassComponent extends C {
  render() {
    const { title, children } = this.props
    return (
      <div>
        <h2>Class Component</h2>
        <p>props.title => {title}</p>
        <div>{children}</div>
      </div>
    )
  }
}

/** Angular Component */
@Component({
  selector: 'app-child',
  template: '',
})
export class AngularComponent extends Renderable {
  @Input() title!: string
  @Input() children: any

  render() {
    return (
      <div>
        <h2>Angular Component</h2>
        <p>props.title => {this.title}</p>
        <p>{this.children}</p>
      </div>
    )
  }
}
