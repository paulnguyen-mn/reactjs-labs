import React, { PureComponent } from 'react'

export const withUnloadConfirmation = (WrappedComponent) => {
  return class extends PureComponent {
    constructor(props) {
      super(props)

      this.beforeUnloadEvent = null
    }

    componentDidMount() {
      this.beforeUnloadEvent = (e) => {
        e.returnValue = 'Are you sure?';
      }

      window.addEventListener('beforeunload', this.beforeUnloadEvent);
    }

    componentWillUnmount() {
      if (this.beforeUnloadEvent) {
        window.removeEventListener('beforeunload', this.beforeUnloadEvent);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}
