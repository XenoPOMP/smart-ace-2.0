import { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';

import CustomLink from '@/src/components/ui/CustomLink/CustomLink';
import { AmazingGrotesk } from '@/src/fonts/AmazingGrotesk';

import styles from './Logo.module.scss';
import type { LogoProps } from './Logo.props';

const font = AmazingGrotesk;

const Logo: VariableFC<typeof CustomLink, LogoProps, 'children' | 'href'> = ({
  className,
  noHoverAnimation = false,
  noText = false,
  ...props
}) => {
  return (
    <CustomLink
      className={cn(
        font.className,
        'font-[900] text-logo-font-color',
        'select-none inline-block',
        styles.logo,
        !noHoverAnimation && styles.withHover,
        className
      )}
      href={'/'}
      applyStyles={false}
      {...props}
    >
      <svg
        height='3.3em'
        viewBox={`0 0 ${noText ? '66' : '284'} 66`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_531_1212)'>
          <path
            d='M88.3849 26.83L88.1749 25.78C87.9949 25.68 87.7749 25.62 87.5149 25.6C87.2749 25.58 87.0049 25.57 86.7049 25.57C86.3049 25.57 85.9149 25.6 85.5349 25.66C85.1549 25.7 84.8149 25.78 84.5149 25.9C84.2349 26.02 84.0049 26.19 83.8249 26.41C83.6449 26.63 83.5549 26.91 83.5549 27.25C83.5549 27.75 83.8749 28.22 84.5149 28.66C85.1549 29.1 86.1649 29.47 87.5449 29.77C88.2049 29.91 88.8749 30.13 89.5549 30.43C90.2549 30.73 90.8949 31.15 91.4749 31.69C92.0549 32.21 92.5249 32.88 92.8849 33.7C93.2649 34.52 93.4549 35.52 93.4549 36.7C93.4549 37.82 93.1849 38.8 92.6449 39.64C92.1249 40.46 91.4449 41.15 90.6049 41.71C89.7849 42.25 88.8549 42.66 87.8149 42.94C86.7949 43.2 85.7949 43.33 84.8149 43.33C83.1149 43.33 81.6949 43.22 80.5549 43C79.4149 42.8 78.4649 42.56 77.7049 42.28L78.3349 37.06H82.0849V38.32C82.0849 38.4 82.1749 38.47 82.3549 38.53C82.5549 38.57 82.8849 38.59 83.3449 38.59C83.7049 38.59 84.0949 38.57 84.5149 38.53C84.9549 38.47 85.3549 38.38 85.7149 38.26C86.0949 38.14 86.4049 37.97 86.6449 37.75C86.9049 37.53 87.0349 37.25 87.0349 36.91C87.0349 36.43 86.9649 36.06 86.8249 35.8C86.6849 35.54 86.4649 35.32 86.1649 35.14C85.8849 34.96 85.5049 34.79 85.0249 34.63C84.5649 34.47 84.0049 34.25 83.3449 33.97C81.5849 33.45 80.2149 32.64 79.2349 31.54C78.2549 30.42 77.7649 28.99 77.7649 27.25C77.7649 26.13 77.9549 25.2 78.3349 24.46C78.7149 23.7 79.2549 23.09 79.9549 22.63C80.6549 22.17 81.4949 21.85 82.4749 21.67C83.4749 21.47 84.5749 21.37 85.7749 21.37C86.9349 21.37 88.0749 21.43 89.1949 21.55C90.3149 21.67 91.4449 21.83 92.5849 22.03L91.7449 27.04L88.3849 26.83ZM115.219 34.66C115.219 33.64 115.189 32.85 115.129 32.29C115.089 31.71 114.999 31.28 114.859 31C114.719 30.7 114.539 30.51 114.319 30.43C114.099 30.35 113.809 30.31 113.449 30.31C113.229 30.33 112.989 30.37 112.729 30.43C112.469 30.49 112.259 30.55 112.099 30.61L111.499 30.88V43H106.339V31.6C106.339 31.2 106.179 30.89 105.859 30.67C105.559 30.43 105.209 30.31 104.809 30.31C104.589 30.31 104.369 30.34 104.149 30.4C103.929 30.46 103.729 30.53 103.549 30.61L102.949 30.88V43H97.5188V31.84C97.5188 31.68 97.5088 31.51 97.4888 31.33C97.4888 31.13 97.4488 30.95 97.3688 30.79C97.2888 30.63 97.1688 30.5 97.0088 30.4C96.8688 30.28 96.6588 30.22 96.3788 30.22C96.1788 30.22 96.0388 30.24 95.9587 30.28C95.8988 30.3 95.8488 30.31 95.8088 30.31L95.5988 27.1C95.8588 26.94 96.1588 26.8 96.4988 26.68C96.8388 26.56 97.2388 26.5 97.6988 26.5C98.4588 26.5 99.0888 26.56 99.5888 26.68C100.089 26.78 100.509 26.96 100.849 27.22C101.489 26.88 102.209 26.62 103.009 26.44C103.829 26.24 104.689 26.14 105.589 26.14C106.209 26.14 106.849 26.22 107.509 26.38C108.189 26.54 108.839 26.82 109.459 27.22C110.079 26.88 110.809 26.62 111.649 26.44C112.489 26.24 113.349 26.14 114.229 26.14C115.149 26.14 115.939 26.27 116.599 26.53C117.259 26.77 117.809 27.09 118.249 27.49C118.709 27.89 119.069 28.34 119.329 28.84C119.609 29.32 119.819 29.8 119.959 30.28C120.119 30.76 120.219 31.21 120.259 31.63C120.319 32.03 120.349 32.35 120.349 32.59V35.53C120.349 35.95 120.349 36.36 120.349 36.76C120.349 37.16 120.359 37.52 120.379 37.84C120.399 38.16 120.419 38.44 120.439 38.68C120.479 38.9 120.529 39.05 120.589 39.13C120.649 39.23 120.739 39.31 120.859 39.37C120.979 39.41 121.099 39.43 121.219 39.43C121.439 39.43 121.639 39.4 121.819 39.34L122.119 39.22L122.329 42.61C122.069 42.77 121.709 42.91 121.249 43.03C120.809 43.15 120.389 43.21 119.989 43.21C119.089 43.21 118.329 43.16 117.709 43.06C117.109 42.98 116.619 42.78 116.239 42.46C115.879 42.14 115.619 41.67 115.459 41.05C115.299 40.43 115.219 39.6 115.219 38.56V34.66ZM137.982 39.07C138.042 39.17 138.132 39.25 138.252 39.31C138.372 39.35 138.492 39.37 138.612 39.37C138.832 39.37 139.032 39.34 139.212 39.28L139.512 39.16L139.722 42.55C139.462 42.71 139.162 42.85 138.822 42.97C138.482 43.09 138.112 43.15 137.712 43.15C136.872 43.15 136.212 43.1 135.732 43C135.272 42.9 134.882 42.75 134.562 42.55C134.142 42.69 133.752 42.81 133.392 42.91C133.032 43.01 132.672 43.09 132.312 43.15C131.952 43.21 131.562 43.25 131.142 43.27C130.722 43.31 130.242 43.33 129.702 43.33C129.062 43.33 128.372 43.26 127.632 43.12C126.912 42.98 126.242 42.7 125.622 42.28C125.022 41.86 124.512 41.26 124.092 40.48C123.692 39.7 123.492 38.67 123.492 37.39C123.492 36.29 123.722 35.4 124.182 34.72C124.642 34.02 125.222 33.48 125.922 33.1C126.622 32.72 127.392 32.47 128.232 32.35C129.092 32.21 129.902 32.14 130.662 32.14C131.342 32.14 131.942 32.17 132.462 32.23C132.462 31.91 132.432 31.63 132.372 31.39C132.332 31.15 132.232 30.96 132.072 30.82C131.932 30.68 131.712 30.58 131.412 30.52C131.132 30.44 130.752 30.4 130.272 30.4C129.772 30.4 129.242 30.43 128.682 30.49C128.122 30.55 127.612 30.62 127.152 30.7L125.502 30.97L124.452 27.43C125.032 27.13 125.912 26.81 127.092 26.47C128.272 26.13 129.842 25.96 131.802 25.96C132.762 25.96 133.572 26.1 134.232 26.38C134.912 26.64 135.472 26.98 135.912 27.4C136.352 27.82 136.692 28.29 136.932 28.81C137.172 29.31 137.352 29.81 137.472 30.31C137.592 30.81 137.662 31.27 137.682 31.69C137.722 32.11 137.742 32.44 137.742 32.68V34.57C137.742 34.99 137.742 35.45 137.742 35.95C137.742 36.43 137.752 36.89 137.772 37.33C137.792 37.77 137.812 38.15 137.832 38.47C137.872 38.79 137.922 38.99 137.982 39.07ZM132.612 35.56C132.392 35.54 132.162 35.52 131.922 35.5C131.682 35.46 131.432 35.44 131.172 35.44C130.892 35.44 130.602 35.47 130.302 35.53C130.022 35.57 129.762 35.67 129.522 35.83C129.282 35.97 129.082 36.17 128.922 36.43C128.782 36.69 128.712 37.03 128.712 37.45C128.712 37.79 128.782 38.07 128.922 38.29C129.062 38.51 129.242 38.69 129.462 38.83C129.682 38.95 129.922 39.04 130.182 39.1C130.462 39.14 130.732 39.16 130.992 39.16C131.272 39.16 131.552 39.13 131.832 39.07C132.132 39.01 132.392 38.98 132.612 38.98V35.56ZM151.24 30.55C149.9 30.55 148.95 30.62 148.39 30.76C147.85 30.88 147.56 30.95 147.52 30.97V43H142.09V31.66C141.89 31.74 141.72 31.8 141.58 31.84C141.46 31.86 141.33 31.9 141.19 31.96L141.04 28.48C141.64 27.92 142.38 27.49 143.26 27.19C144.14 26.87 145.05 26.63 145.99 26.47C146.95 26.31 147.89 26.21 148.81 26.17C149.73 26.13 150.54 26.11 151.24 26.11V30.55ZM160.673 21.46V26.47H163.763V30.43H160.583V37.66C160.583 37.84 160.583 38.03 160.583 38.23C160.603 38.43 160.643 38.62 160.703 38.8C160.763 38.96 160.853 39.1 160.973 39.22C161.113 39.32 161.303 39.37 161.543 39.37C161.763 39.37 161.993 39.35 162.233 39.31C162.493 39.27 162.733 39.22 162.953 39.16L163.703 38.95L164.123 42.61C164.003 42.65 163.803 42.71 163.523 42.79C163.263 42.87 162.943 42.95 162.563 43.03C162.203 43.11 161.803 43.18 161.363 43.24C160.943 43.3 160.513 43.33 160.073 43.33C159.373 43.33 158.723 43.23 158.123 43.03C157.543 42.85 157.033 42.58 156.593 42.22C156.153 41.84 155.803 41.38 155.543 40.84C155.303 40.28 155.183 39.64 155.183 38.92V30.43H153.143V26.47H154.643C154.823 26.47 154.993 26.4 155.153 26.26C155.333 26.1 155.483 25.84 155.603 25.48C155.723 25.1 155.823 24.61 155.903 24.01C155.983 23.39 156.023 22.63 156.023 21.73L160.673 21.46ZM165.676 43V39.01H167.056L172.636 21.7H178.906L184.306 39.01H185.686V43H179.896L178.546 39.01H172.756L171.436 43H165.676ZM174.016 34.87H177.436L175.846 28.99L174.016 34.87ZM196.907 32.11L196.757 30.97C196.617 30.75 196.307 30.61 195.827 30.55C195.347 30.49 194.867 30.46 194.387 30.46C194.167 30.46 193.937 30.5 193.697 30.58C193.477 30.64 193.267 30.79 193.067 31.03C192.867 31.27 192.697 31.62 192.557 32.08C192.437 32.54 192.377 33.16 192.377 33.94V35.71C192.377 36.53 192.447 37.17 192.587 37.63C192.727 38.07 192.897 38.4 193.097 38.62C193.317 38.82 193.547 38.94 193.787 38.98C194.027 39.02 194.237 39.04 194.417 39.04C195.517 39.04 196.487 38.99 197.327 38.89C198.167 38.77 199.007 38.59 199.847 38.35L200.927 42.16C200.487 42.4 199.977 42.6 199.397 42.76C198.817 42.9 198.227 43 197.627 43.06C197.027 43.14 196.437 43.19 195.857 43.21C195.297 43.25 194.817 43.27 194.417 43.27C193.577 43.27 192.717 43.21 191.837 43.09C190.957 42.99 190.157 42.72 189.437 42.28C188.717 41.82 188.127 41.16 187.667 40.3C187.227 39.42 187.007 38.21 187.007 36.67V32.8C187.007 31.34 187.247 30.18 187.727 29.32C188.227 28.44 188.837 27.77 189.557 27.31C190.297 26.85 191.097 26.55 191.957 26.41C192.817 26.27 193.617 26.2 194.357 26.2C195.377 26.2 196.197 26.22 196.817 26.26C197.437 26.28 197.957 26.32 198.377 26.38C198.817 26.44 199.207 26.5 199.547 26.56C199.887 26.62 200.277 26.68 200.717 26.74L200.237 32.11H196.907ZM211.417 43.33C210.877 43.33 210.277 43.3 209.617 43.24C208.977 43.2 208.327 43.1 207.667 42.94C207.027 42.76 206.397 42.52 205.777 42.22C205.177 41.9 204.637 41.49 204.157 40.99C203.677 40.47 203.297 39.85 203.017 39.13C202.737 38.39 202.597 37.51 202.597 36.49V32.68C202.597 31.16 202.877 29.97 203.437 29.11C204.017 28.23 204.717 27.58 205.537 27.16C206.377 26.72 207.267 26.45 208.207 26.35C209.147 26.25 209.987 26.2 210.727 26.2C211.207 26.2 211.707 26.22 212.227 26.26C212.767 26.3 213.287 26.4 213.787 26.56C214.307 26.72 214.797 26.95 215.257 27.25C215.737 27.55 216.157 27.96 216.517 28.48C216.877 29 217.157 29.64 217.357 30.4C217.577 31.16 217.687 32.07 217.687 33.13C217.687 33.71 217.667 34.27 217.627 34.81C217.587 35.35 217.517 35.88 217.417 36.4H207.727C207.807 37 207.977 37.49 208.237 37.87C208.517 38.23 208.827 38.51 209.167 38.71C209.507 38.89 209.847 39.02 210.187 39.1C210.547 39.16 210.837 39.19 211.057 39.19C212.217 39.19 213.177 39.16 213.937 39.1C214.697 39.04 215.427 38.99 216.127 38.95L217.417 42.22C216.977 42.46 216.487 42.66 215.947 42.82C215.427 42.96 214.897 43.06 214.357 43.12C213.817 43.2 213.287 43.25 212.767 43.27C212.267 43.31 211.817 43.33 211.417 43.33ZM210.337 29.92C209.997 29.92 209.667 29.96 209.347 30.04C209.047 30.12 208.777 30.28 208.537 30.52C208.297 30.74 208.097 31.07 207.937 31.51C207.797 31.93 207.707 32.49 207.667 33.19H212.137C212.317 33.13 212.427 33.03 212.467 32.89C212.527 32.75 212.557 32.51 212.557 32.17C212.457 31.33 212.217 30.75 211.837 30.43C211.477 30.09 210.977 29.92 210.337 29.92Z'
            className={cn('fill-logo-font-color')}
          />
          <path
            d='M66 33C66 51.2254 51.2254 66 33 66C14.7746 66 0 51.2254 0 33C0 14.7746 14.7746 0 33 0C51.2254 0 66 14.7746 66 33ZM6.70148 33C6.70148 47.5243 18.4757 59.2985 33 59.2985C47.5243 59.2985 59.2985 47.5243 59.2985 33C59.2985 18.4757 47.5243 6.70148 33 6.70148C18.4757 6.70148 6.70148 18.4757 6.70148 33Z'
            fill='currentColor'
          />
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M26.9381 9.39194L27.3296 9C16.8114 11.5479 9 21.0248 9 32.3262C9 45.414 19.476 56.055 32.5 56.3211V55.8262C31.6667 54.8262 29.9 52.7262 29.5 52.3262C29 51.8262 27 48.8262 25 44.8262C23.547 41.9203 25.0079 36.7327 25.7879 34.431C25.8093 34.1904 25.8725 33.8362 26 33.3262C26.4 31.7262 29.5 29.3262 31 28.3262H36C36.1667 27.8262 37.1 26.8262 39.5 26.8262C41.9 26.8262 40.5 25.1596 39.5 24.3262L35 23.8262C34.6667 23.6596 33.7 23.2262 32.5 22.8262C31.3 22.4262 28.3333 22.9929 27 23.3262L23 23.8262C24.5 24.4929 27.4 25.8262 27 25.8262C26.5 25.8262 23.5 27.3262 22.5 27.8262C21.7 28.2262 17.5 32.6596 15.5 34.8262C15.1667 35.4929 14.5 36.4262 14.5 34.8262C14.5 33.2262 17.1667 30.1596 18.5 28.8262V22.8262C18.5 19.2523 24.085 12.4259 26.9381 9.39194ZM26.5 35.3262C26.3333 36.8262 26.1 40.4262 26.5 42.8262C26.9 45.2262 33.6667 52.4929 37 55.8262V55.9944C42.1983 55.1223 46.8299 52.5792 50.3237 48.9362C46.421 47.6485 39.4611 45.4065 35.5 44.3262C31.8314 43.3257 28.3714 38.3164 27.0326 35.3262H26.5ZM57 32.3262C57 37.5507 55.3306 42.3853 52.4962 46.3256C47.1616 45.4919 36.4995 43.3259 34.5 41.8262L27.5 34.8262H31.5C36.5 33.4929 46.5 29.2262 46.5 22.8262V12.4803C49.9491 14.8311 52.7537 18.0575 54.5939 21.8397L54.5 21.8262C54.3333 23.6596 53.8 27.6262 53 28.8262C52 30.3262 50.4142 32.1191 49 32.8262C48 33.3262 39.8333 37.3262 38 37.8262C40.3333 37.8262 50.5 34.3262 52 33.3262C53.5 32.3262 56 30.3262 56.5 29.3262C56.5712 29.1837 56.6541 29.0074 56.7441 28.8091C56.9127 29.9571 57 31.1314 57 32.3262Z'
            fill='currentColor'
          />
          <path
            d='M236.775 38.18L245.055 30.2C245.595 29.74 246.055 29.21 246.435 28.61C246.835 28.01 247.035 27.46 247.035 26.96C247.035 26.52 246.835 26.11 246.435 25.73C246.035 25.35 245.415 25.16 244.575 25.16C244.315 25.16 244.005 25.18 243.645 25.22C243.305 25.24 242.975 25.28 242.655 25.34C242.355 25.4 242.095 25.48 241.875 25.58C241.675 25.68 241.575 25.81 241.575 25.97C241.575 26.17 241.665 26.46 241.845 26.84L238.575 28.22L236.535 23.36C237.155 23.1 237.805 22.83 238.485 22.55C239.165 22.27 239.845 22.03 240.525 21.83C241.205 21.61 241.875 21.43 242.535 21.29C243.195 21.15 243.815 21.08 244.395 21.08C245.175 21.08 246.045 21.12 247.005 21.2C247.965 21.26 248.865 21.47 249.705 21.83C250.565 22.17 251.275 22.69 251.835 23.39C252.415 24.09 252.705 25.07 252.705 26.33V27.35C252.705 27.83 252.585 28.35 252.345 28.91C252.105 29.47 251.785 29.93 251.385 30.29L242.655 38.18H249.075C249.295 38.1 249.435 37.98 249.495 37.82C249.575 37.66 249.615 37.36 249.615 36.92H253.125V42.5H236.775V38.18ZM255.722 39.86C255.722 39.32 255.812 38.86 255.992 38.48C256.192 38.1 256.452 37.8 256.772 37.58C257.112 37.34 257.492 37.17 257.912 37.07C258.352 36.95 258.822 36.89 259.322 36.89C259.822 36.89 260.282 36.94 260.702 37.04C261.142 37.12 261.522 37.28 261.842 37.52C262.182 37.74 262.442 38.04 262.622 38.42C262.822 38.8 262.922 39.28 262.922 39.86C262.922 40.44 262.822 40.92 262.622 41.3C262.442 41.68 262.182 41.99 261.842 42.23C261.522 42.45 261.142 42.61 260.702 42.71C260.282 42.81 259.822 42.86 259.322 42.86C258.822 42.86 258.352 42.81 257.912 42.71C257.492 42.63 257.112 42.48 256.772 42.26C256.452 42.04 256.192 41.74 255.992 41.36C255.812 40.96 255.722 40.46 255.722 39.86ZM274.076 20.9C274.696 20.9 275.356 20.93 276.056 20.99C276.756 21.03 277.436 21.15 278.096 21.35C278.776 21.53 279.426 21.8 280.046 22.16C280.666 22.52 281.206 23.01 281.666 23.63C282.126 24.23 282.496 24.98 282.776 25.88C283.056 26.78 283.196 27.86 283.196 29.12V33.98C283.196 35.9 282.936 37.44 282.416 38.6C281.916 39.76 281.246 40.66 280.406 41.3C279.566 41.92 278.596 42.33 277.496 42.53C276.396 42.73 275.256 42.83 274.076 42.83C272.896 42.83 271.756 42.72 270.656 42.5C269.556 42.3 268.586 41.89 267.746 41.27C266.906 40.63 266.226 39.73 265.706 38.57C265.206 37.41 264.956 35.88 264.956 33.98V29.12C264.956 27.86 265.096 26.78 265.376 25.88C265.656 24.98 266.026 24.23 266.486 23.63C266.966 23.01 267.516 22.52 268.136 22.16C268.756 21.8 269.396 21.53 270.056 21.35C270.736 21.15 271.416 21.03 272.096 20.99C272.796 20.93 273.456 20.9 274.076 20.9ZM274.076 24.98C273.436 24.98 272.906 25.11 272.486 25.37C272.086 25.61 271.766 25.97 271.526 26.45C271.306 26.93 271.146 27.54 271.046 28.28C270.966 29 270.926 29.84 270.926 30.8V33.08C270.926 34.1 270.966 34.97 271.046 35.69C271.146 36.41 271.306 37 271.526 37.46C271.766 37.9 272.086 38.22 272.486 38.42C272.906 38.62 273.436 38.72 274.076 38.72C274.696 38.72 275.206 38.62 275.606 38.42C276.026 38.22 276.356 37.9 276.596 37.46C276.836 37 276.996 36.41 277.076 35.69C277.176 34.97 277.226 34.1 277.226 33.08V30.8C277.226 29.84 277.176 29 277.076 28.28C276.996 27.54 276.836 26.93 276.596 26.45C276.376 25.97 276.056 25.61 275.636 25.37C275.236 25.11 274.716 24.98 274.076 24.98Z'
            className={cn('fill-logo-font-color')}
          />
        </g>
        <defs>
          <clipPath id='clip0_531_1212'>
            <rect width='284' height='66' rx='6' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </CustomLink>
  );
};

export default Logo;
