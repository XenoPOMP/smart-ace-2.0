import {
  ArrayType,
  RecordKey,
  RecordValue,
  VariableFC,
} from '@xenopomp/advanced-types';
import cn from 'classnames';
import { CSSProperties, ComponentProps, FC, ReactNode } from 'react';

import { Hardness } from '@/src/interfaces/Service.interface';

import styles from './HardnessMeter.module.scss';
import type { HardnessMeterProps } from './HardnessMeter.props';

const HardnessMeter: VariableFC<
  'div',
  HardnessMeterProps,
  'children' | 'aria-valuemin' | 'aria-valuemax' | 'aria-valuenow'
> = ({ hardness, className, ...props }) => {
  type PathProps = ComponentProps<'path'>;

  const mainStyles: Record<'withStroke' | 'withFill', PathProps> = {
    withStroke: {
      className: cn(styles.main, styles.withStroke),
    },

    withFill: {
      className: cn(styles.main, styles.withFill),
    },
  };

  const trackStyles: PathProps = {
    className: cn(styles.track),
  };

  const meterStyles: Record<Hardness, PathProps> = {
    [Hardness.Easy]: { className: cn(styles.meter, styles.easy) },
    [Hardness.Medium]: { className: cn(styles.meter, styles.medium) },
    [Hardness.Hard]: { className: cn(styles.meter, styles.hard) },
    [Hardness.Hardcore]: { className: cn(styles.meter, styles.hardcore) },
  };

  const icons: Record<Hardness, ReactNode> = {
    [Hardness.Easy]: (
      <>
        <svg
          width='45'
          height='45'
          viewBox='0 0 45 45'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M22.5 5.625C11.6279 5.625 2.81252 14.4316 2.81252 25.3037C2.80585 30.1138 4.56685 34.7588 7.76076 38.3555C7.85744 38.4609 7.94533 38.5664 8.04201 38.6631C8.25 38.8883 8.50247 39.0678 8.78345 39.1903C9.06443 39.3128 9.36779 39.3756 9.67431 39.3748C9.98084 39.374 10.2839 39.3095 10.5642 39.1855C10.8445 39.0615 11.096 38.8806 11.3028 38.6543C12.7279 37.1055 14.4589 35.8693 16.3862 35.0236C18.3135 34.178 20.3953 33.7413 22.5 33.7413C24.6047 33.7413 26.6865 34.178 28.6139 35.0236C30.5412 35.8693 32.2721 37.1055 33.6973 38.6543C33.9041 38.8806 34.1556 39.0615 34.4359 39.1855C34.7162 39.3095 35.0192 39.374 35.3257 39.3748C35.6323 39.3756 35.9356 39.3128 36.2166 39.1903C36.4976 39.0678 36.75 38.8883 36.958 38.6631L37.2393 38.3555C40.4332 34.7588 42.1942 30.1138 42.1875 25.3037C42.1875 14.4316 33.3721 5.625 22.5 5.625Z'
            stroke='red'
            {...mainStyles.withStroke}
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            d='M18.392 20.0494L25.0277 24.2242C25.2644 24.395 25.4722 24.6028 25.643 24.8395C26.0416 25.4109 26.1988 26.1165 26.0805 26.8032C25.9621 27.4898 25.5777 28.1021 25.0107 28.5071C24.4437 28.912 23.7399 29.0771 23.052 28.9664C22.3641 28.8556 21.7476 28.4781 21.3363 27.9156L17.1615 21.2799C17.0564 21.1291 17 20.9496 17 20.7657C17 20.5819 17.0564 20.4024 17.1615 20.2516C17.2983 20.0621 17.5045 19.9345 17.735 19.8967C17.9656 19.8588 18.2018 19.9137 18.392 20.0494Z'
            fill='red'
            {...mainStyles.withFill}
          />
          <path
            d='M10.2053 26.1523C9.05869 26.3064 7.98827 25.4991 8.00086 24.3423C8.01561 22.9854 8.22082 21.6338 8.61327 20.3276C9.20726 18.3507 10.2165 16.5234 11.5735 14.9679C12.9305 13.4124 14.604 12.1645 16.482 11.3078C18.36 10.4511 20.3994 10.0052 22.4636 10C24.5278 9.99486 26.5693 10.4305 28.4517 11.2778C30.334 12.125 32.0137 13.3644 33.3785 14.9131C34.7433 16.4618 35.7617 18.284 36.3656 20.2579C36.7646 21.5621 36.9766 22.9127 36.9982 24.2695C37.0166 25.4262 35.9502 26.2389 34.8029 26.0905C33.6555 25.9422 32.8681 24.8852 32.7818 23.7316C32.725 22.971 32.5838 22.217 32.3594 21.4836C31.93 20.08 31.2058 18.7843 30.2354 17.683C29.2649 16.5818 28.0705 15.7005 26.732 15.0981C25.3936 14.4956 23.9419 14.1858 22.4741 14.1895C21.0063 14.1932 19.5562 14.5102 18.2208 15.1194C16.8854 15.7286 15.6954 16.6159 14.7305 17.722C13.7656 18.8281 13.0479 20.1274 12.6256 21.5331C12.4049 22.2677 12.2674 23.0224 12.2144 23.7832C12.134 24.9373 11.3519 25.9982 10.2053 26.1523Z'
            fill='green'
            {...trackStyles}
          />
          <path
            d='M10.2053 26.1523C9.05869 26.3064 7.98827 25.4991 8.00086 24.3423C8.01816 22.7518 8.29713 21.17 8.83107 19.6616C9.36502 18.1531 10.1433 16.7481 11.1305 15.5009C11.8485 14.5938 13.1884 14.6397 13.9827 15.4808C14.777 16.3219 14.7175 17.6386 14.054 18.5863C13.5215 19.3468 13.0923 20.1783 12.7804 21.0595C12.4685 21.9407 12.279 22.8571 12.2144 23.7832C12.134 24.9373 11.3519 25.9982 10.2053 26.1523Z'
            fill='#3CE02E'
            {...meterStyles[Hardness.Easy]}
          />
        </svg>
      </>
    ),
    [Hardness.Medium]: (
      <svg
        width='45'
        height='45'
        viewBox='0 0 45 45'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M22.5 5.625C11.6279 5.625 2.81252 14.4316 2.81252 25.3037C2.80585 30.1138 4.56685 34.7588 7.76076 38.3555C7.85744 38.4609 7.94533 38.5664 8.04201 38.6631C8.25 38.8883 8.50247 39.0678 8.78345 39.1903C9.06443 39.3128 9.36779 39.3756 9.67431 39.3748C9.98084 39.374 10.2839 39.3095 10.5642 39.1855C10.8445 39.0615 11.096 38.8806 11.3028 38.6543C12.7279 37.1055 14.4589 35.8693 16.3862 35.0236C18.3135 34.178 20.3953 33.7413 22.5 33.7413C24.6047 33.7413 26.6865 34.178 28.6139 35.0236C30.5412 35.8693 32.2721 37.1055 33.6973 38.6543C33.9041 38.8806 34.1556 39.0615 34.4359 39.1855C34.7162 39.3095 35.0192 39.374 35.3257 39.3748C35.6323 39.3756 35.9356 39.3128 36.2166 39.1903C36.4976 39.0678 36.75 38.8883 36.958 38.6631L37.2393 38.3555C40.4332 34.7588 42.1942 30.1138 42.1875 25.3037C42.1875 14.4316 33.3721 5.625 22.5 5.625Z'
          stroke='black'
          {...mainStyles.withStroke}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <g clip-path='url(#clip0_80_562)'>
          <path
            d='M23.1417 18.8477L24.8818 26.4919C24.9284 26.78 24.9284 27.0738 24.8818 27.3619C24.7596 28.0479 24.3718 28.658 23.8026 29.0598C23.2334 29.4617 22.5287 29.6228 21.8414 29.5083C21.1541 29.3937 20.5397 29.0127 20.1316 28.448C19.7234 27.8833 19.5545 27.1804 19.6614 26.4919L21.4015 18.8477C21.4338 18.6666 21.5209 18.4999 21.6509 18.3699C21.7809 18.2399 21.9476 18.1528 22.1287 18.1205C22.3593 18.0833 22.5953 18.1389 22.7852 18.2751C22.975 18.4114 23.1032 18.6172 23.1417 18.8477Z'
            fill='black'
            {...mainStyles.withFill}
          />
        </g>
        <path
          d='M10.2053 26.1523C9.05869 26.3064 7.98827 25.4991 8.00086 24.3423C8.01561 22.9854 8.22082 21.6338 8.61327 20.3276C9.20726 18.3507 10.2165 16.5234 11.5735 14.9679C12.9305 13.4124 14.604 12.1645 16.482 11.3078C18.36 10.4511 20.3994 10.0052 22.4636 10C24.5278 9.99486 26.5693 10.4305 28.4517 11.2778C30.334 12.125 32.0137 13.3644 33.3785 14.9131C34.7433 16.4618 35.7617 18.284 36.3656 20.2579C36.7646 21.5621 36.9766 22.9127 36.9982 24.2695C37.0166 25.4262 35.9502 26.2389 34.8029 26.0905C33.6555 25.9422 32.8681 24.8852 32.7818 23.7316C32.725 22.971 32.5838 22.217 32.3594 21.4836C31.93 20.08 31.2058 18.7843 30.2354 17.683C29.2649 16.5818 28.0705 15.7005 26.732 15.0981C25.3936 14.4956 23.9419 14.1858 22.4741 14.1895C21.0063 14.1932 19.5562 14.5102 18.2208 15.1194C16.8854 15.7286 15.6954 16.6159 14.7305 17.722C13.7656 18.8281 13.0479 20.1274 12.6256 21.5331C12.4049 22.2677 12.2674 23.0224 12.2144 23.7832C12.134 24.9373 11.3519 25.9982 10.2053 26.1523Z'
          fill='#505050'
          {...trackStyles}
        />
        <path
          d='M10.2053 26.1523C9.05869 26.3064 7.98827 25.4991 8.00086 24.3423C8.01663 22.8923 8.24986 21.4489 8.6962 20.061C9.35698 18.0062 10.4682 16.1248 11.9487 14.5542C13.4292 12.9835 15.2416 11.7632 17.2538 10.9823C18.613 10.4548 20.0402 10.1368 21.4867 10.0355C22.6407 9.9546 23.5098 10.9755 23.4236 12.1292C23.3375 13.2829 22.3246 14.1263 21.1773 14.2747C20.3555 14.381 19.5469 14.5863 18.7696 14.888C17.3388 15.4433 16.05 16.311 14.9973 17.4278C13.9445 18.5447 13.1544 19.8824 12.6845 21.3435C12.4293 22.1373 12.272 22.9565 12.2144 23.7832C12.134 24.9373 11.3519 25.9982 10.2053 26.1523Z'
          fill='#FFB800'
          {...meterStyles[Hardness.Medium]}
        />
        <defs>
          <clipPath id='clip0_80_562'>
            <rect
              width='13'
              height='13'
              fill='white'
              transform='translate(13 24.1924) rotate(-45)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
    [Hardness.Hard]: (
      <svg
        width='45'
        height='45'
        viewBox='0 0 45 45'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M22.5 5.625C11.6279 5.625 2.81252 14.4316 2.81252 25.3037C2.80585 30.1138 4.56685 34.7588 7.76076 38.3555C7.85744 38.4609 7.94533 38.5664 8.04201 38.6631C8.25 38.8883 8.50247 39.0678 8.78345 39.1903C9.06443 39.3128 9.36779 39.3756 9.67431 39.3748C9.98084 39.374 10.2839 39.3095 10.5642 39.1855C10.8445 39.0615 11.096 38.8806 11.3028 38.6543C12.7279 37.1055 14.4589 35.8693 16.3862 35.0236C18.3135 34.178 20.3953 33.7413 22.5 33.7413C24.6047 33.7413 26.6865 34.178 28.6139 35.0236C30.5412 35.8693 32.2721 37.1055 33.6973 38.6543C33.9041 38.8806 34.1556 39.0615 34.4359 39.1855C34.7162 39.3095 35.0192 39.374 35.3257 39.3748C35.6323 39.3756 35.9356 39.3128 36.2166 39.1903C36.4976 39.0678 36.75 38.8883 36.958 38.6631L37.2393 38.3555C40.4332 34.7588 42.1942 30.1138 42.1875 25.3037C42.1875 14.4316 33.3721 5.625 22.5 5.625Z'
          stroke='black'
          {...mainStyles.withStroke}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <path
          d='M26.9506 21.392L22.7758 28.0277C22.605 28.2644 22.3972 28.4722 22.1605 28.643C21.5891 29.0416 20.8835 29.1988 20.1968 29.0805C19.5102 28.9621 18.8979 28.5777 18.4929 28.0107C18.088 27.4437 17.9229 26.7399 18.0336 26.052C18.1444 25.3641 18.5219 24.7476 19.0844 24.3363L25.7201 20.1615C25.8709 20.0564 26.0504 20 26.2343 20C26.4181 20 26.5976 20.0564 26.7484 20.1615C26.9379 20.2983 27.0655 20.5045 27.1033 20.735C27.1412 20.9656 27.0863 21.2018 26.9506 21.392Z'
          fill='black'
          {...mainStyles.withFill}
        />
        <path
          d='M10.2053 26.1523C9.05869 26.3064 7.98827 25.4991 8.00086 24.3423C8.01561 22.9854 8.22082 21.6338 8.61327 20.3276C9.20726 18.3507 10.2165 16.5234 11.5735 14.9679C12.9305 13.4124 14.604 12.1645 16.482 11.3078C18.36 10.4511 20.3994 10.0052 22.4636 10C24.5278 9.99486 26.5693 10.4305 28.4517 11.2778C30.334 12.125 32.0137 13.3644 33.3785 14.9131C34.7433 16.4618 35.7617 18.284 36.3656 20.2579C36.7646 21.5621 36.9766 22.9127 36.9982 24.2695C37.0166 25.4262 35.9502 26.2389 34.8029 26.0905C33.6555 25.9422 32.8681 24.8852 32.7818 23.7316C32.725 22.971 32.5838 22.217 32.3594 21.4836C31.93 20.08 31.2058 18.7843 30.2354 17.683C29.2649 16.5818 28.0705 15.7005 26.732 15.0981C25.3936 14.4956 23.9419 14.1858 22.4741 14.1895C21.0063 14.1932 19.5562 14.5102 18.2208 15.1194C16.8854 15.7286 15.6954 16.6159 14.7305 17.722C13.7656 18.8281 13.0479 20.1274 12.6256 21.5331C12.4049 22.2677 12.2674 23.0224 12.2144 23.7832C12.134 24.9373 11.3519 25.9982 10.2053 26.1523Z'
          fill='#505050'
          {...trackStyles}
        />
        <path
          d='M10.2053 26.1523C9.05869 26.3064 7.98825 25.4991 8.00084 24.3423C8.02761 21.8808 8.68103 19.4543 9.9151 17.2979C11.4978 14.5323 13.9473 12.3651 16.8851 11.1313C19.823 9.89738 23.0854 9.66557 26.1681 10.4716C28.5719 11.1002 30.762 12.3324 32.5383 14.0366C33.3731 14.8375 33.2002 16.167 32.2874 16.8779C31.3747 17.5887 30.0695 17.4044 29.1892 16.6538C28.0134 15.6515 26.6203 14.9202 25.1083 14.5249C22.9163 13.9517 20.5964 14.1165 18.5074 14.9939C16.4185 15.8712 14.6766 17.4123 13.5513 19.3788C12.775 20.7352 12.3218 22.2419 12.2144 23.7832C12.134 24.9373 11.3519 25.9982 10.2053 26.1523Z'
          fill='#FF8A00'
          {...meterStyles[Hardness.Hard]}
        />
      </svg>
    ),
    [Hardness.Hardcore]: (
      <svg
        width='45'
        height='45'
        viewBox='0 0 45 45'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M22.5 5.625C11.6279 5.625 2.81252 14.4316 2.81252 25.3037C2.80585 30.1138 4.56685 34.7588 7.76076 38.3555C7.85744 38.4609 7.94533 38.5664 8.04201 38.6631C8.25 38.8883 8.50247 39.0678 8.78345 39.1903C9.06443 39.3128 9.36779 39.3756 9.67431 39.3748C9.98084 39.374 10.2839 39.3095 10.5642 39.1855C10.8445 39.0615 11.096 38.8806 11.3028 38.6543C12.7279 37.1055 14.4589 35.8693 16.3862 35.0236C18.3135 34.178 20.3953 33.7413 22.5 33.7413C24.6047 33.7413 26.6865 34.178 28.6139 35.0236C30.5412 35.8693 32.2721 37.1055 33.6973 38.6543C33.9041 38.8806 34.1556 39.0615 34.4359 39.1855C34.7162 39.3095 35.0192 39.374 35.3257 39.3748C35.6323 39.3756 35.9356 39.3128 36.2166 39.1903C36.4976 39.0678 36.75 38.8883 36.958 38.6631L37.2393 38.3555C40.4332 34.7588 42.1942 30.1138 42.1875 25.3037C42.1875 14.4316 33.3721 5.625 22.5 5.625Z'
          stroke='black'
          {...mainStyles.withStroke}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
        <g clip-path='url(#clip0_80_576)'>
          <path
            d='M30.5371 26.1417L22.8929 27.8818C22.6048 27.9284 22.311 27.9284 22.0228 27.8818C21.3369 27.7596 20.7267 27.3718 20.3249 26.8026C19.9231 26.2334 19.762 25.5287 19.8765 24.8414C19.9911 24.1541 20.372 23.5397 20.9368 23.1316C21.5015 22.7234 22.2044 22.5545 22.8929 22.6614L30.5371 24.4015C30.7181 24.4338 30.8849 24.5209 31.0149 24.6509C31.1449 24.7809 31.2319 24.9476 31.2642 25.1287C31.3015 25.3593 31.2459 25.5953 31.1097 25.7852C30.9734 25.975 30.7676 26.1032 30.5371 26.1417Z'
            fill='black'
            {...mainStyles.withFill}
          />
        </g>
        <path
          d='M10.2053 26.1523C9.05869 26.3064 7.98827 25.4991 8.00086 24.3423C8.01561 22.9854 8.22082 21.6338 8.61327 20.3276C9.20726 18.3507 10.2165 16.5234 11.5735 14.9679C12.9305 13.4124 14.604 12.1645 16.482 11.3078C18.36 10.4511 20.3994 10.0052 22.4636 10C24.5278 9.99486 26.5693 10.4305 28.4517 11.2778C30.334 12.125 32.0137 13.3644 33.3785 14.9131C34.7433 16.4618 35.7617 18.284 36.3656 20.2579C36.7646 21.5621 36.9766 22.9127 36.9982 24.2695C37.0166 25.4262 35.9502 26.2389 34.8029 26.0905C33.6555 25.9422 32.8681 24.8852 32.7818 23.7316C32.725 22.971 32.5838 22.217 32.3594 21.4836C31.93 20.08 31.2058 18.7843 30.2354 17.683C29.2649 16.5818 28.0705 15.7005 26.732 15.0981C25.3936 14.4956 23.9419 14.1858 22.4741 14.1895C21.0063 14.1932 19.5562 14.5102 18.2208 15.1194C16.8854 15.7286 15.6954 16.6159 14.7305 17.722C13.7656 18.8281 13.0479 20.1274 12.6256 21.5331C12.4049 22.2677 12.2674 23.0224 12.2144 23.7832C12.134 24.9373 11.3519 25.9982 10.2053 26.1523Z'
          fill='#505050'
          {...trackStyles}
        />
        <path
          d='M10.2053 26.1523C9.05869 26.3064 7.98827 25.4991 8.00086 24.3423C8.01561 22.9856 8.22075 21.6342 8.61309 20.3282C9.20692 18.3515 10.2159 16.5243 11.5726 14.9689C12.9293 13.4134 14.6025 12.1655 16.4802 11.3086C18.3579 10.4517 20.397 10.0056 22.461 10.0001C24.525 9.9945 26.5664 10.4296 28.4487 11.2764C30.331 12.1232 32.0108 13.362 33.3759 14.9102C34.741 16.4583 35.7598 18.28 36.3643 20.2535C36.7636 21.5574 36.976 22.9077 36.9981 24.2643C37.0169 25.421 35.9508 26.234 34.8034 26.0861C33.656 25.9382 32.8682 24.8815 32.7816 23.7279C32.7245 22.9675 32.583 22.2137 32.3585 21.4805C31.9286 20.0772 31.2042 18.7818 30.2335 17.681C29.2629 16.5801 28.0684 15.6992 26.7299 15.0971C25.3915 14.495 23.9399 14.1856 22.4722 14.1895C21.0046 14.1935 19.5547 14.5107 18.2195 15.12C16.8843 15.7293 15.6946 16.6167 14.7299 17.7227C13.7652 18.8287 13.0477 20.128 12.6254 21.5336C12.4048 22.268 12.2674 23.0226 12.2144 23.7832C12.134 24.9373 11.3519 25.9982 10.2053 26.1523Z'
          fill='#FF0000'
          {...meterStyles[Hardness.Hardcore]}
        />
        <defs>
          <clipPath id='clip0_80_576'>
            <rect
              width='13'
              height='13'
              fill='white'
              transform='translate(25.1924 16) rotate(45)'
            />
          </clipPath>
        </defs>
      </svg>
    ),
  };

  return (
    <div
      role={'progressbar'}
      aria-valuemin={Hardness.Easy}
      aria-valuemax={Hardness.Hardcore}
      aria-valuenow={hardness}
      className={cn(styles.meter, className)}
      {...props}
    >
      {icons[hardness]}
    </div>
  );
};

export default HardnessMeter;