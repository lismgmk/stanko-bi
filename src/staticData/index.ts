import { StaticImageData } from 'next/image'
import { VkSvg } from 'svgIcons/VkSvg'
import { FacebookSvg } from '../svgIcons/FacebookSvg'
import { InstagramSvg } from '../svgIcons/InstagramSvg'
import { TelegramSvg } from '../svgIcons/TelegramSvg'
import { TiktokSvg } from '../svgIcons/TiktokSvg'
import { TwitterSvg } from '../svgIcons/TwitterSvg'
import { YoutubeSvg } from '../svgIcons/YoutubeSvg'
import card_1 from '../../public/images/card_1.webp'
import card_2 from '../../public/images/bgMain.webp'
import card_3 from '../../public/images/logo.webp'

export const socialNetworks = [
  { svgElem: VkSvg },
  { svgElem: FacebookSvg },
  { svgElem: InstagramSvg },
  { svgElem: YoutubeSvg },
  { svgElem: TelegramSvg },
  { svgElem: TiktokSvg },
  { svgElem: TwitterSvg },
]
export const upPages = [
  { name: 'Review' },
  { name: 'Экстрим' },
  { name: 'Легенды' },
  { name: 'зож и туризм' },
  { name: 'Позірк' },
  { name: 'Треш' },
]
export const menuLinePrimary = [
  { name: 'Главная' },
  { name: 'Комплектация' },
  { name: 'Заказчику' },
  { name: 'Доставка и сборка' },
  { name: 'Наши работы' },
  { name: 'Контакты' },
]
export const menuLineSecondary = [
  { name: 'Каталог домов' },
  { name: 'Каталог бытовок' },
  { name: 'Каталог беседок' },
  { name: 'Каталог бань' },
  { name: 'Каталог хоз. построек' },
]

export const mainImageBlock = {
  title: 'СТРОИТЕЛЬСТВО ДАЧНЫХ ДОМОВ И КОТТЕДЖЕЙ',
  subTitle:
    'На участок поставляются готовые модули, производится их монтаж в короткие сроки. Мы гарантируем выполнение всех взятых на себя обязательств и доступные цены.',
}

export type cardsType = {
  pathImg: StaticImageData
  data: string
  tag: string
  title: string
  article: { option: string; value: string }[]
  price: string
}

export const cardsButtons = [
  { name: 'Каркасные дома' },
  { name: 'Бани' },
  { name: 'Беседки' },
  { name: 'Бытовки' },
  { name: 'Хоз. постройки' },
]
export const cards: cardsType[] = [
  {
    pathImg: card_1,
    data: 'Сегодня',
    tag: '#болельщикам',
    title: 'Каркасный дом с балконом LK-2',
    article: [
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
    ],
    price: '940 000 ₽',
  },
  {
    pathImg: card_2,
    data: 'Сегодня',
    tag: '#болельщикам',
    title: 'Каркасный дом с балконом LK-2',
    article: [
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
    ],
    price: '940 000 ₽',
  },
  {
    pathImg: card_3,
    data: 'Сегодня',
    tag: '#болельщикам',
    title: 'Каркасный дом с балконом LK-2',
    article: [
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
    ],
    price: '940 000 ₽',
  },
  {
    pathImg: card_2,
    data: 'Сегодня',
    tag: '#болельщикам',
    title: 'Каркасный дом с балконом LK-2',
    article: [
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
    ],
    price: '940 000 ₽',
  },
  {
    pathImg: card_1,
    data: 'Сегодня',
    tag: '#болельщикам',
    title: 'Каркасный дом с балконом LK-2',
    article: [
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
    ],
    price: '940 000 ₽',
  },
  {
    pathImg: card_2,
    data: 'Сегодня',
    tag: '#болельщикам',
    title: 'Каркасный дом с балконом LK-2',
    article: [
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
    ],
    price: '940 000 ₽',
  },
  {
    pathImg: card_3,
    data: 'Сегодня',
    tag: '#болельщикам',
    title: 'Каркасный дом с балконом LK-2',
    article: [
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
    ],
    price: '940 000 ₽',
  },
  {
    pathImg: card_3,
    data: 'Сегодня',
    tag: '#болельщикам',
    title: 'Каркасный дом с балконом LK-2',
    article: [
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
      { option: 'Размер:', value: '4х6 м' },
    ],
    price: '940 000 ₽',
  },
]
