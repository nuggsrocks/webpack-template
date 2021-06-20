import index from '../src/js/index'
import { expect } from 'chai'

describe('index', () => {
  describe('sayHello()', () => {
    it('should add hello to the dom', () => {
      index.sayHello()

      expect(document.body.textContent).to.match(/hello world/i)
    })
  })
})
