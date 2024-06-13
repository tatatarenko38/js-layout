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

const TAB_LIST = [
  {
    info: 'База знань',
    active: true,
  },
  {
    info: 'Інформація',
    active: false,
  },
]

const createChange = () => {
  const changeTwo = createElement('div', 'change')

  TAB_LIST.forEach((tab) => {
    const change = createElement(
      'div',
      tab.active
        ? 'change__ch change--viewed'
        : 'change__ch',
    )

    const text = createElement(
      'div',
      'change__text',
      tab.info,
    )

    const under = createElement('div', 'change__under')

    change.append(text, under)

    changeTwo.append(change)
  })

  return changeTwo
}

const change = createChange()

page2.append(change)

const INFO_LIST = {
  src: '/img/image__1.png',
  title: 'Що таке база знань?',
  text: `База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и
  знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию,
  являющуюся результатом решения предыдущих задач.`,
  button: `Перейти до ком'юніті у Телеграм`,
}

const createInfo = () => {
  const infoBox = createElement('div', 'info')
  const img = createElement('img', 'info__img')

  img.src = INFO_LIST.src

  infoBox.appendChild(img)

  const title = createElement(
    'div',
    'info__title',
    INFO_LIST.title,
  )

  infoBox.appendChild(title)

  const textContainer = createElement(
    'div',
    'info__text',
    INFO_LIST.text,
  )

  infoBox.appendChild(textContainer)

  const button = createElement('button', 'info__button', INFO_LIST.button)

  infoBox.appendChild(button)

  return infoBox
}
const info =  createInfo()

page2.append(info)
