class Menu {
  constructor(labels = [], esp = 20, disp = 0) {
    this.labels = labels
    this.esp = esp
    this.disp = disp

    this.ul = document.createElement('ul')
    this.ul.style.listStyleType = 'none'
    this.ul.style.display = (disp === 0) ? 'flex' : 'block'
    this.ul.style.justifyContent = (disp === 0) ? 'space-between' : 'initial'
    this.ul.style.margin = '0'
    this.ul.style.padding = '0'

    this.labels.forEach((label, index) => {
      let li = document.createElement('li')
      li.style.display = (disp === 0) ? 'inline-block' : 'block'
      li.style.margin = `0 ${esp / 2}px`
      li.textContent = label
      li.addEventListener('click', () => this.dispatchMenuClickEvent(index))
      this.ul.appendChild(li)
    })
  }

  dispatchMenuClickEvent(index) {
    this.ul.dispatchEvent(new CustomEvent('menu_click', { detail: { index } }))
  }

  getObjDOM() {
    return this.ul
  }

  setEsp(esp) {
    this.esp = esp
    if (this.disp === 1) {
      this.menu.style.paddingLeft = `${esp}px`
    } else {
      this.ul.querySelectorAll('li').forEach(li => {
        li.style.margin = `0 ${esp / 2}px`
      })
    }
    return this
  }

  setDisp(disp) {
    this.disp = disp
    this.ul.style.display = (disp === 0) ? 'flex' : 'block'
    this.ul.style.justifyContent = (disp === 0) ? 'space-between' : 'initial'
    this.ul.querySelectorAll('li').forEach(li => {
      li.style.display = (disp === 0) ? 'inline-block' : 'block'
    })
    return this
  }

  addItem(label, esp) {
    if (!label || esp < 0) {
      return this
    }
    let li = document.createElement('li')
    li.style.display = (this.disp === 0) ? 'inline-block' : 'block'
    li.style.margin = `0 ${this.esp / 2}px`
    li.textContent = label
    li.addEventListener('click', () => this.dispatchMenuClickEvent(this.labels.length))
    this.ul.appendChild(li)
    this.labels.push(label)
    return this
  }
}

module.exports = Menu