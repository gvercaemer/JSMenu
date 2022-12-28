/**
 * @jest-environment jsdom
 */
const Menu = require('../Menu')

describe('Menu', () => {
  test('should create a horizontal menu with three items', () => {
    let labels = ["Accueil", "Produits", "Contact"]
    let menu = new Menu(labels)
    let menuObj = menu.getObjDOM()
    expect(menuObj.style.display).toBe('flex')
    expect(menuObj.style.justifyContent).toBe('space-between')
    expect(menuObj.querySelectorAll('li').length).toBe(3)
  })

  test('should create a vertical menu with three items', () => {
    let labels = ["Accueil", "Produits", "Contact"]
    let menu = new Menu(labels, 20, 1)
    let menuObj = menu.getObjDOM()
    expect(menuObj.style.display).toBe('block')
  })

  test('should add an item to the menu', () => {
    let labels = ["Accueil", "Produits", "Contact"]
    let menu = new Menu(labels)
    menu.addItem('Test')
    let menuObj = menu.getObjDOM()
    expect(menuObj.querySelectorAll('li').length).toBe(4)
  })

  test('should handle empty label when adding an item', () => {
    let labels = ["Accueil", "Produits", "Contact"]
    let menu = new Menu(labels)
    menu.addItem('')
    let menuObj = menu.getObjDOM()
    expect(menuObj.querySelectorAll('li').length).toBe(3)
  })

  test('should handle negative spacing when adding an item', () => {
    let labels = ["Accueil", "Produits", "Contact"]
    let menu = new Menu(labels)
    menu.addItem('Test', -10)
    let menuObj = menu.getObjDOM()
    expect(menuObj.style.justifyContent).toBe('space-between')
  })

  test('should handle empty label and negative spacing when adding an item', () => {
    let labels = ["Accueil", "Produits", "Contact"]
    let menu = new Menu(labels)
    menu.addItem('', -10)
    let menuObj = menu.getObjDOM()
    expect(menuObj.querySelectorAll('li').length).toBe(3)
    expect(menuObj.style.justifyContent).toBe('space-between')
  })
})