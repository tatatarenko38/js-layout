import {
  createElement,
  createHeader,
} from '../../script/layout'

const page2 = document.querySelector('.page')

const header2 = createHeader()

page2.append(header2)

const title2 = createElement('h1', 'title', `Ком'юніті`)

page2.append(title2)

//=====

// const TABS_BUTTON_LIST = [
//   {
//     text: 'База знань',
//   },
//   {
//     text: 'Інформація',
//   },
// ]

// const createInfo = () => {
//   const infoList = createElement('main', 'info__list')

//   const tabs = createElement('div', 'tabs')

//   TABS_BUTTON_LIST.forEach((params) => {
//     const tab = createElement('button', 'tabs__button')

//     const span = createElement('span')

//     Object.entries(params).forEach(([key, value]) => {
//       span[key] = value
//     })

//     tab.append(span)

//     tabs.append(tab)
//     infoList.append(tabs)
//   })

//   const img = createElement('img')
//   infoList.append(img)
//   return infoList
// }

// const info = createInfo()
// page2.append(info)

const INFO_LIST = {
  text1: 'База знань',
  text2: 'Інформація',
  src: '/img/image__1.png',
  title: 'Що таке база знань?',
  info: `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и
  знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию,
  являющуюся результатом решения предыдущих задач.`,
  button: `Перейти до ком'юніті у Телеграм`,
}

const createInfo = () => {
  const infoList = createElement('main', 'info__list')

  const tabs = createElement('div', 'tabs')
  const tab1 = createElement(
    'button',
    'tabs__button',
    info.text1,
  )
  const tab2 = createElement(
    'button',
    'tabs__button',
    info.text2,
  )
  tabs.append(tab1, tab2)
  info.append(tabs)
}

const info = createInfo()
page2.append(info)
