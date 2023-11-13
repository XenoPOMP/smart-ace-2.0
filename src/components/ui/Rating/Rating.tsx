'use client';

import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { motion } from 'framer-motion';

import styles from './Rating.module.scss';
import type { RatingProps } from './Rating.props';

const Rating: VariableFC<
  'svg',
  RatingProps,
  'children' | 'fill' | 'viewBox' | 'xmlns'
> = ({ className, rating, ...props }) => {
  const processRating = (target: number): number => {
    if (target < 1) {
      return 1;
    }

    if (target > 5) {
      return 5;
    }

    return target;
  };

  return (
    <svg
      height='1em'
      viewBox='0 0 190 36'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M52.0787 23.4928C51.6246 25.4551 51.3976 26.4363 51.9333 26.8256C52.4691 27.2148 53.3321 26.6957 55.0581 25.6575L55.9623 25.1136C56.4677 24.8097 56.7204 24.6577 56.9995 24.6585C57.2786 24.6593 57.5304 24.8127 58.034 25.1196L58.932 25.6669C60.6609 26.7205 61.5253 27.2473 62.0637 26.8591C62.6022 26.4709 62.3754 25.4843 61.922 23.5111L61.6875 22.4908C61.556 21.9184 61.4902 21.6323 61.5768 21.368C61.6634 21.1037 61.8858 20.9119 62.3305 20.5284L63.1091 19.8569C64.6373 18.5388 65.4015 17.8797 65.1983 17.2488C64.9951 16.6179 63.99 16.5287 61.9797 16.3502L60.9466 16.2584C60.366 16.2069 60.0756 16.1811 59.852 16.0189C59.6284 15.8567 59.5138 15.5887 59.2846 15.0527L58.8321 13.9946C58.0487 12.1627 57.6569 11.2467 56.9979 11.2458C56.339 11.2449 55.9448 12.1598 55.1564 13.9897L54.7169 15.0099C54.4869 15.5437 54.3719 15.8106 54.1487 15.9721C53.9255 16.1336 53.636 16.1593 53.057 16.2108L51.9868 16.3058C49.9889 16.4832 48.99 16.5719 48.7858 17.2005C48.5815 17.8291 49.3376 18.488 50.8497 19.8057L51.6773 20.5269C52.1183 20.9113 52.3388 21.1034 52.4242 21.3671C52.5096 21.6307 52.4437 21.9157 52.3118 22.4856L52.0787 23.4928ZM49.3137 33.5659C47.5865 34.6049 46.723 35.1244 46.1871 34.7349C45.6513 34.3454 45.879 33.3637 46.3345 31.4002L48.0823 23.8651C48.2151 23.2924 48.2815 23.0061 48.1953 22.7415C48.1091 22.4769 47.8868 22.2846 47.4421 21.9002L41.5822 16.8339C40.0537 15.5124 39.2894 14.8517 39.4938 14.2207C39.6982 13.5898 40.7047 13.5027 42.7178 13.3284L50.4808 12.6564C51.065 12.6059 51.3571 12.5806 51.5818 12.4174C51.8065 12.2542 51.9209 11.9842 52.1497 11.4443L55.1586 4.34492C55.9447 2.49009 56.3377 1.56268 57 1.56268C57.6623 1.56268 58.0553 2.49009 58.8414 4.34492L61.8503 11.4443C62.0791 11.9842 62.1935 12.2542 62.4182 12.4174C62.6429 12.5806 62.935 12.6059 63.5192 12.6564L71.2822 13.3284C73.2953 13.5027 74.3018 13.5898 74.5062 14.2207C74.7106 14.8517 73.9463 15.5124 72.4178 16.8339L66.5579 21.9002C66.1132 22.2846 65.8909 22.4769 65.8047 22.7415C65.7185 23.0061 65.7849 23.2924 65.9177 23.8651L67.6655 31.4002C68.121 33.3637 68.3487 34.3454 67.8129 34.7349C67.277 35.1244 66.4135 34.6049 64.6863 33.5659L58.031 29.5623C57.5287 29.2602 57.2776 29.1091 57 29.1091C56.7224 29.1091 56.4713 29.2602 55.969 29.5623L49.3137 33.5659Z'
        fill='#939393'
        className={cn('fill-head-icon-color-inactive')}
      />
      <path
        d='M90.0787 23.4928C89.6246 25.4551 89.3976 26.4363 89.9333 26.8256C90.4691 27.2148 91.3321 26.6957 93.0581 25.6575L93.9623 25.1136C94.4677 24.8097 94.7204 24.6577 94.9995 24.6585C95.2786 24.6593 95.5304 24.8127 96.034 25.1196L96.932 25.6669C98.6609 26.7205 99.5253 27.2473 100.064 26.8591C100.602 26.4709 100.375 25.4843 99.922 23.5111L99.6875 22.4908C99.556 21.9184 99.4902 21.6323 99.5768 21.368C99.6634 21.1037 99.8858 20.9119 100.33 20.5284L101.109 19.8569C102.637 18.5388 103.401 17.8797 103.198 17.2488C102.995 16.6179 101.99 16.5287 99.9797 16.3502L98.9466 16.2584C98.366 16.2069 98.0756 16.1811 97.852 16.0189C97.6284 15.8567 97.5138 15.5887 97.2846 15.0527L96.8321 13.9946C96.0487 12.1627 95.6569 11.2467 94.9979 11.2458C94.339 11.2449 93.9448 12.1598 93.1564 13.9897L92.7169 15.0099C92.4869 15.5437 92.3719 15.8106 92.1487 15.9721C91.9255 16.1336 91.636 16.1593 91.057 16.2108L89.9868 16.3058C87.9889 16.4832 86.99 16.5719 86.7858 17.2005C86.5815 17.8291 87.3376 18.488 88.8497 19.8057L89.6773 20.5269C90.1183 20.9113 90.3388 21.1034 90.4242 21.3671C90.5096 21.6307 90.4437 21.9157 90.3118 22.4856L90.0787 23.4928ZM87.3137 33.5659C85.5865 34.6049 84.723 35.1244 84.1871 34.7349C83.6513 34.3454 83.879 33.3637 84.3345 31.4002L86.0823 23.8651C86.2151 23.2924 86.2815 23.0061 86.1953 22.7415C86.1091 22.4769 85.8868 22.2846 85.4421 21.9002L79.5822 16.8339C78.0537 15.5124 77.2894 14.8517 77.4938 14.2207C77.6982 13.5898 78.7047 13.5027 80.7178 13.3284L88.4808 12.6564C89.065 12.6059 89.3571 12.5806 89.5818 12.4174C89.8065 12.2542 89.9209 11.9842 90.1497 11.4443L93.1586 4.34492C93.9447 2.49009 94.3377 1.56268 95 1.56268C95.6623 1.56268 96.0553 2.49009 96.8414 4.34492L99.8503 11.4443C100.079 11.9842 100.194 12.2542 100.418 12.4174C100.643 12.5806 100.935 12.6059 101.519 12.6564L109.282 13.3284C111.295 13.5027 112.302 13.5898 112.506 14.2207C112.711 14.8517 111.946 15.5124 110.418 16.8339L104.558 21.9002C104.113 22.2846 103.891 22.4769 103.805 22.7415C103.718 23.0061 103.785 23.2924 103.918 23.8651L105.666 31.4002C106.121 33.3637 106.349 34.3454 105.813 34.7349C105.277 35.1244 104.413 34.6049 102.686 33.5659L96.031 29.5623C95.5287 29.2602 95.2776 29.1091 95 29.1091C94.7224 29.1091 94.4713 29.2602 93.969 29.5623L87.3137 33.5659Z'
        fill='#939393'
        className={cn('fill-head-icon-color-inactive')}
      />
      <path
        d='M128.079 23.4928C127.625 25.4551 127.398 26.4363 127.933 26.8256C128.469 27.2148 129.332 26.6957 131.058 25.6575L131.962 25.1136C132.468 24.8097 132.72 24.6577 133 24.6585C133.279 24.6593 133.53 24.8127 134.034 25.1196L134.932 25.6669C136.661 26.7205 137.525 27.2473 138.064 26.8591C138.602 26.4709 138.375 25.4843 137.922 23.5111L137.688 22.4908C137.556 21.9184 137.49 21.6323 137.577 21.368C137.663 21.1037 137.886 20.9119 138.33 20.5284L139.109 19.8569C140.637 18.5388 141.401 17.8797 141.198 17.2488C140.995 16.6179 139.99 16.5287 137.98 16.3502L136.947 16.2584C136.366 16.2069 136.076 16.1811 135.852 16.0189C135.628 15.8567 135.514 15.5887 135.285 15.0527L134.832 13.9946C134.049 12.1627 133.657 11.2467 132.998 11.2458C132.339 11.2449 131.945 12.1598 131.156 13.9897L130.717 15.0099C130.487 15.5437 130.372 15.8106 130.149 15.9721C129.925 16.1336 129.636 16.1593 129.057 16.2108L127.987 16.3058C125.989 16.4832 124.99 16.5719 124.786 17.2005C124.582 17.8291 125.338 18.488 126.85 19.8057L127.677 20.5269C128.118 20.9113 128.339 21.1034 128.424 21.3671C128.51 21.6307 128.444 21.9157 128.312 22.4856L128.079 23.4928ZM125.314 33.5659C123.587 34.6049 122.723 35.1244 122.187 34.7349C121.651 34.3454 121.879 33.3637 122.334 31.4002L124.082 23.8651C124.215 23.2924 124.282 23.0061 124.195 22.7415C124.109 22.4769 123.887 22.2846 123.442 21.9002L117.582 16.8339C116.054 15.5124 115.289 14.8517 115.494 14.2207C115.698 13.5898 116.705 13.5027 118.718 13.3284L126.481 12.6564C127.065 12.6059 127.357 12.5806 127.582 12.4174C127.806 12.2542 127.921 11.9842 128.15 11.4443L131.159 4.34492C131.945 2.49009 132.338 1.56268 133 1.56268C133.662 1.56268 134.055 2.49009 134.841 4.34492L137.85 11.4443C138.079 11.9842 138.194 12.2542 138.418 12.4174C138.643 12.5806 138.935 12.6059 139.519 12.6564L147.282 13.3284C149.295 13.5027 150.302 13.5898 150.506 14.2207C150.711 14.8517 149.946 15.5124 148.418 16.8339L142.558 21.9002C142.113 22.2846 141.891 22.4769 141.805 22.7415C141.718 23.0061 141.785 23.2924 141.918 23.8651L143.666 31.4002C144.121 33.3637 144.349 34.3454 143.813 34.7349C143.277 35.1244 142.413 34.6049 140.686 33.5659L134.031 29.5623C133.529 29.2602 133.278 29.1091 133 29.1091C132.722 29.1091 132.471 29.2602 131.969 29.5623L125.314 33.5659Z'
        fill='#939393'
        className={cn('fill-head-icon-color-inactive')}
      />
      <path
        d='M166.079 23.4928C165.625 25.4551 165.398 26.4363 165.933 26.8256C166.469 27.2148 167.332 26.6957 169.058 25.6575L169.962 25.1136C170.468 24.8097 170.72 24.6577 171 24.6585C171.279 24.6593 171.53 24.8127 172.034 25.1196L172.932 25.6669C174.661 26.7205 175.525 27.2473 176.064 26.8591C176.602 26.4709 176.375 25.4843 175.922 23.5111L175.688 22.4908C175.556 21.9184 175.49 21.6323 175.577 21.368C175.663 21.1037 175.886 20.9119 176.33 20.5284L177.109 19.8569C178.637 18.5388 179.401 17.8797 179.198 17.2488C178.995 16.6179 177.99 16.5287 175.98 16.3502L174.947 16.2584C174.366 16.2069 174.076 16.1811 173.852 16.0189C173.628 15.8567 173.514 15.5887 173.285 15.0527L172.832 13.9946C172.049 12.1627 171.657 11.2467 170.998 11.2458C170.339 11.2449 169.945 12.1598 169.156 13.9897L168.717 15.0099C168.487 15.5437 168.372 15.8106 168.149 15.9721C167.925 16.1336 167.636 16.1593 167.057 16.2108L165.987 16.3058C163.989 16.4832 162.99 16.5719 162.786 17.2005C162.582 17.8291 163.338 18.488 164.85 19.8057L165.677 20.5269C166.118 20.9113 166.339 21.1034 166.424 21.3671C166.51 21.6307 166.444 21.9157 166.312 22.4856L166.079 23.4928ZM163.314 33.5659C161.587 34.6049 160.723 35.1244 160.187 34.7349C159.651 34.3454 159.879 33.3637 160.334 31.4002L162.082 23.8651C162.215 23.2924 162.282 23.0061 162.195 22.7415C162.109 22.4769 161.887 22.2846 161.442 21.9002L155.582 16.8339C154.054 15.5124 153.289 14.8517 153.494 14.2207C153.698 13.5898 154.705 13.5027 156.718 13.3284L164.481 12.6564C165.065 12.6059 165.357 12.5806 165.582 12.4174C165.806 12.2542 165.921 11.9842 166.15 11.4443L169.159 4.34492C169.945 2.49009 170.338 1.56268 171 1.56268C171.662 1.56268 172.055 2.49009 172.841 4.34492L175.85 11.4443C176.079 11.9842 176.194 12.2542 176.418 12.4174C176.643 12.5806 176.935 12.6059 177.519 12.6564L185.282 13.3284C187.295 13.5027 188.302 13.5898 188.506 14.2207C188.711 14.8517 187.946 15.5124 186.418 16.8339L180.558 21.9002C180.113 22.2846 179.891 22.4769 179.805 22.7415C179.718 23.0061 179.785 23.2924 179.918 23.8651L181.666 31.4002C182.121 33.3637 182.349 34.3454 181.813 34.7349C181.277 35.1244 180.413 34.6049 178.686 33.5659L172.031 29.5623C171.529 29.2602 171.278 29.1091 171 29.1091C170.722 29.1091 170.471 29.2602 169.969 29.5623L163.314 33.5659Z'
        fill='#939393'
        className={cn('fill-head-icon-color-inactive')}
      />
      <path
        d='M14.0787 23.4928C13.6246 25.4551 13.3976 26.4363 13.9333 26.8256C14.4691 27.2148 15.3321 26.6957 17.0581 25.6575L17.9623 25.1136C18.4677 24.8097 18.7204 24.6577 18.9995 24.6585C19.2786 24.6593 19.5304 24.8127 20.034 25.1196L20.932 25.6669C22.6609 26.7205 23.5253 27.2473 24.0637 26.8591C24.6022 26.4709 24.3754 25.4843 23.922 23.5111L23.6875 22.4908C23.556 21.9184 23.4902 21.6323 23.5768 21.368C23.6634 21.1037 23.8858 20.9119 24.3305 20.5284L25.1091 19.8569C26.6373 18.5388 27.4015 17.8797 27.1983 17.2488C26.9951 16.6179 25.99 16.5287 23.9797 16.3502L22.9466 16.2584C22.366 16.2069 22.0756 16.1811 21.852 16.0189C21.6284 15.8567 21.5138 15.5887 21.2846 15.0527L20.8321 13.9946C20.0487 12.1627 19.6569 11.2467 18.9979 11.2458C18.339 11.2449 17.9448 12.1598 17.1564 13.9897L16.7169 15.0099C16.4869 15.5437 16.3719 15.8106 16.1487 15.9721C15.9255 16.1336 15.636 16.1593 15.057 16.2108L13.9868 16.3058C11.9889 16.4832 10.99 16.5719 10.7858 17.2005C10.5815 17.8291 11.3376 18.488 12.8497 19.8057L13.6773 20.5269C14.1183 20.9113 14.3388 21.1034 14.4242 21.3671C14.5096 21.6307 14.4437 21.9157 14.3118 22.4856L14.0787 23.4928ZM11.3137 33.5659C9.58654 34.6049 8.72295 35.1244 8.18712 34.7349C7.65129 34.3454 7.87902 33.3637 8.33446 31.4002L10.0823 23.8651C10.2151 23.2924 10.2815 23.0061 10.1953 22.7415C10.1091 22.4769 9.88676 22.2846 9.44209 21.9002L3.58224 16.8339C2.0537 15.5124 1.28944 14.8517 1.49381 14.2207C1.69819 13.5898 2.70473 13.5027 4.7178 13.3284L12.4808 12.6564C13.065 12.6059 13.3571 12.5806 13.5818 12.4174C13.8065 12.2542 13.9209 11.9842 14.1497 11.4443L17.1586 4.34492C17.9447 2.49009 18.3377 1.56268 19 1.56268C19.6623 1.56268 20.0553 2.49009 20.8414 4.34492L23.8503 11.4443C24.0791 11.9842 24.1935 12.2542 24.4182 12.4174C24.6429 12.5806 24.935 12.6059 25.5192 12.6564L33.2822 13.3284C35.2953 13.5027 36.3018 13.5898 36.5062 14.2207C36.7106 14.8517 35.9463 15.5124 34.4178 16.8339L28.5579 21.9002C28.1132 22.2846 27.8909 22.4769 27.8047 22.7415C27.7185 23.0061 27.7849 23.2924 27.9177 23.8651L29.6655 31.4002C30.121 33.3637 30.3487 34.3454 29.8129 34.7349C29.277 35.1244 28.4135 34.6049 26.6863 33.5659L20.031 29.5623C19.5287 29.2602 19.2776 29.1091 19 29.1091C18.7224 29.1091 18.4713 29.2602 17.969 29.5623L11.3137 33.5659Z'
        fill='#939393'
        className={cn('fill-head-icon-color-inactive')}
      />
      <motion.mask
        id='mask0_80_668'
        style={{
          maskType: 'alpha',
        }}
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width={'100%'}
        height='100%'
        initial={{
          width: '0%',
        }}
        animate={{
          width: ['0%', `${(processRating(rating) / 5) * 100}%`],
        }}
        transition={{
          duration: 0.75,
          ease: 'easeOut',
        }}
      >
        <rect width='190' height='36' fill='#D9D9D9' />
      </motion.mask>
      <g mask='url(#mask0_80_668)'>
        <path
          d='M11.3137 33.5659C9.58654 34.6049 8.72295 35.1244 8.18712 34.7349C7.65129 34.3454 7.87902 33.3637 8.33446 31.4002L10.0823 23.8651C10.2151 23.2924 10.2815 23.0061 10.1953 22.7415C10.1091 22.4769 9.88676 22.2846 9.44209 21.9002L3.58224 16.8339C2.0537 15.5124 1.28944 14.8517 1.49381 14.2207C1.69819 13.5898 2.70473 13.5027 4.7178 13.3284L12.4808 12.6564C13.065 12.6059 13.3571 12.5806 13.5818 12.4174C13.8065 12.2542 13.9209 11.9842 14.1497 11.4443L17.1586 4.34492C17.9447 2.49009 18.3377 1.56268 19 1.56268C19.6623 1.56268 20.0553 2.49009 20.8414 4.34492L23.8503 11.4443C24.0791 11.9842 24.1935 12.2542 24.4182 12.4174C24.6429 12.5806 24.935 12.6059 25.5192 12.6564L33.2822 13.3284C35.2953 13.5027 36.3018 13.5898 36.5062 14.2207C36.7106 14.8517 35.9463 15.5124 34.4178 16.8339L28.5579 21.9002C28.1132 22.2846 27.8909 22.4769 27.8047 22.7415C27.7185 23.0061 27.7849 23.2924 27.9177 23.8651L29.6655 31.4002C30.121 33.3637 30.3487 34.3454 29.8129 34.7349C29.277 35.1244 28.4135 34.6049 26.6863 33.5659L20.031 29.5623C19.5287 29.2602 19.2776 29.1091 19 29.1091C18.7224 29.1091 18.4713 29.2602 17.969 29.5623L11.3137 33.5659Z'
          fill='#E4CF0A'
          className={cn('fill-service-star')}
        />
        <path
          d='M49.3137 33.5659C47.5865 34.6049 46.723 35.1244 46.1871 34.7349C45.6513 34.3454 45.879 33.3637 46.3345 31.4002L48.0823 23.8651C48.2151 23.2924 48.2815 23.0061 48.1953 22.7415C48.1091 22.4769 47.8868 22.2846 47.4421 21.9002L41.5822 16.8339C40.0537 15.5124 39.2894 14.8517 39.4938 14.2207C39.6982 13.5898 40.7047 13.5027 42.7178 13.3284L50.4808 12.6564C51.065 12.6059 51.3571 12.5806 51.5818 12.4174C51.8065 12.2542 51.9209 11.9842 52.1497 11.4443L55.1586 4.34492C55.9447 2.49009 56.3377 1.56268 57 1.56268C57.6623 1.56268 58.0553 2.49009 58.8414 4.34492L61.8503 11.4443C62.0791 11.9842 62.1935 12.2542 62.4182 12.4174C62.6429 12.5806 62.935 12.6059 63.5192 12.6564L71.2822 13.3284C73.2953 13.5027 74.3018 13.5898 74.5062 14.2207C74.7106 14.8517 73.9463 15.5124 72.4178 16.8339L66.5579 21.9002C66.1132 22.2846 65.8909 22.4769 65.8047 22.7415C65.7185 23.0061 65.7849 23.2924 65.9177 23.8651L67.6655 31.4002C68.121 33.3637 68.3487 34.3454 67.8129 34.7349C67.277 35.1244 66.4135 34.6049 64.6863 33.5659L58.031 29.5623C57.5287 29.2602 57.2776 29.1091 57 29.1091C56.7224 29.1091 56.4713 29.2602 55.969 29.5623L49.3137 33.5659Z'
          fill='#E4CF0A'
          className={cn('fill-service-star')}
        />
        <path
          d='M87.3137 33.5659C85.5865 34.6049 84.723 35.1244 84.1871 34.7349C83.6513 34.3454 83.879 33.3637 84.3345 31.4002L86.0823 23.8651C86.2151 23.2924 86.2815 23.0061 86.1953 22.7415C86.1091 22.4769 85.8868 22.2846 85.4421 21.9002L79.5822 16.8339C78.0537 15.5124 77.2894 14.8517 77.4938 14.2207C77.6982 13.5898 78.7047 13.5027 80.7178 13.3284L88.4808 12.6564C89.065 12.6059 89.3571 12.5806 89.5818 12.4174C89.8065 12.2542 89.9209 11.9842 90.1497 11.4443L93.1586 4.34492C93.9447 2.49009 94.3377 1.56268 95 1.56268C95.6623 1.56268 96.0553 2.49009 96.8414 4.34492L99.8503 11.4443C100.079 11.9842 100.194 12.2542 100.418 12.4174C100.643 12.5806 100.935 12.6059 101.519 12.6564L109.282 13.3284C111.295 13.5027 112.302 13.5898 112.506 14.2207C112.711 14.8517 111.946 15.5124 110.418 16.8339L104.558 21.9002C104.113 22.2846 103.891 22.4769 103.805 22.7415C103.718 23.0061 103.785 23.2924 103.918 23.8651L105.666 31.4002C106.121 33.3637 106.349 34.3454 105.813 34.7349C105.277 35.1244 104.413 34.6049 102.686 33.5659L96.031 29.5623C95.5287 29.2602 95.2776 29.1091 95 29.1091C94.7224 29.1091 94.4713 29.2602 93.969 29.5623L87.3137 33.5659Z'
          fill='#E4CF0A'
          className={cn('fill-service-star')}
        />
        <path
          d='M125.314 33.5659C123.587 34.6049 122.723 35.1244 122.187 34.7349C121.651 34.3454 121.879 33.3637 122.334 31.4002L124.082 23.8651C124.215 23.2924 124.282 23.0061 124.195 22.7415C124.109 22.4769 123.887 22.2846 123.442 21.9002L117.582 16.8339C116.054 15.5124 115.289 14.8517 115.494 14.2207C115.698 13.5898 116.705 13.5027 118.718 13.3284L126.481 12.6564C127.065 12.6059 127.357 12.5806 127.582 12.4174C127.806 12.2542 127.921 11.9842 128.15 11.4443L131.159 4.34492C131.945 2.49009 132.338 1.56268 133 1.56268C133.662 1.56268 134.055 2.49009 134.841 4.34492L137.85 11.4443C138.079 11.9842 138.194 12.2542 138.418 12.4174C138.643 12.5806 138.935 12.6059 139.519 12.6564L147.282 13.3284C149.295 13.5027 150.302 13.5898 150.506 14.2207C150.711 14.8517 149.946 15.5124 148.418 16.8339L142.558 21.9002C142.113 22.2846 141.891 22.4769 141.805 22.7415C141.718 23.0061 141.785 23.2924 141.918 23.8651L143.666 31.4002C144.121 33.3637 144.349 34.3454 143.813 34.7349C143.277 35.1244 142.413 34.6049 140.686 33.5659L134.031 29.5623C133.529 29.2602 133.278 29.1091 133 29.1091C132.722 29.1091 132.471 29.2602 131.969 29.5623L125.314 33.5659Z'
          fill='#E4CF0A'
          className={cn('fill-service-star')}
        />
        <path
          d='M163.314 33.5659C161.587 34.6049 160.723 35.1244 160.187 34.7349C159.651 34.3454 159.879 33.3637 160.334 31.4002L162.082 23.8651C162.215 23.2924 162.282 23.0061 162.195 22.7415C162.109 22.4769 161.887 22.2846 161.442 21.9002L155.582 16.8339C154.054 15.5124 153.289 14.8517 153.494 14.2207C153.698 13.5898 154.705 13.5027 156.718 13.3284L164.481 12.6564C165.065 12.6059 165.357 12.5806 165.582 12.4174C165.806 12.2542 165.921 11.9842 166.15 11.4443L169.159 4.34492C169.945 2.49009 170.338 1.56268 171 1.56268C171.662 1.56268 172.055 2.49009 172.841 4.34492L175.85 11.4443C176.079 11.9842 176.194 12.2542 176.418 12.4174C176.643 12.5806 176.935 12.6059 177.519 12.6564L185.282 13.3284C187.295 13.5027 188.302 13.5898 188.506 14.2207C188.711 14.8517 187.946 15.5124 186.418 16.8339L180.558 21.9002C180.113 22.2846 179.891 22.4769 179.805 22.7415C179.718 23.0061 179.785 23.2924 179.918 23.8651L181.666 31.4002C182.121 33.3637 182.349 34.3454 181.813 34.7349C181.277 35.1244 180.413 34.6049 178.686 33.5659L172.031 29.5623C171.529 29.2602 171.278 29.1091 171 29.1091C170.722 29.1091 170.471 29.2602 169.969 29.5623L163.314 33.5659Z'
          fill='#E4CF0A'
          className={cn('fill-service-star')}
        />
      </g>
    </svg>
  );
};

export default Rating;
