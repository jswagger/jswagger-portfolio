import { vi } from 'vitest'

type ObserveCallback = (entries: Pick<IntersectionObserverEntry, 'isIntersecting' | 'target'>[]) => void

export class MockIntersectionObserver {
  static instances: MockIntersectionObserver[] = []

  callback: ObserveCallback
  observedNodes: Element[] = []

  constructor(callback: ObserveCallback) {
    this.callback = callback
    MockIntersectionObserver.instances.push(this)
  }

  observe(node: Element) {
    this.observedNodes.push(node)
  }

  disconnect() {
    this.observedNodes = []
  }

  unobserve() {}

  trigger(isIntersecting: boolean, target: Element = this.observedNodes[0]) {
    this.callback([{ isIntersecting, target }])
  }
}

export function installMockIntersectionObserver() {
  MockIntersectionObserver.instances = []
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  return MockIntersectionObserver
}
