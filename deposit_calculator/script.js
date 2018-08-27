'use strict'


class DepositCalculator {
  constructor() {
    this.calculator = document.forms.calculator
    this.diagram = document.querySelector('#diagram')
    this._getSum()
    this._renderSum()

    this.calculator.oninput = e => {
      if (e.type !== 'input') return
      this._getSum()
      this._renderSum()
    }
  }

  _getSum() {
    this._identifyValues()
    if (this.isNAN) return
    this._getResult()
  }

  _identifyValues() {
    this.isNAN = true

    let elem = this.calculator.elements
    this.initial = +elem.money.value
    this.years = +elem.months.value / 12
    this.interest = +elem.interest.value * 0.01

    if (!(this.initial && this.years && this.interest)) return

    return this.isNAN = false
  }

  _getResult() {
    this.result = Math.round(this.initial * (1 + this.interest * this.years))
  }

  _renderSum() {
    if (this.isNAN) return

    this._renderMoney()
    this._renderGraphic()
  }

  _renderMoney() {
    this.diagram.querySelector('#money-before').innerHTML = this.initial
    this.diagram.querySelector('#money-after').innerHTML = this.result
  }

  _renderGraphic() {
    this.heightBefore = this.diagram.querySelector('#height-before')
    this.heightAfter = this.diagram.querySelector('#height-after')

    let after = 100
    let before = this.initial * after / this.result
    this.heightAfter.style.height = after + 'px'
    this.heightBefore.style.height = before + 'px'
  }
}

new DepositCalculator()