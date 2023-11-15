'use client';

import { VariableFC } from '@xenopomp/advanced-types';
import { isUndefined } from '@xenopomp/advanced-utils';
import axios, { AxiosResponse } from 'axios';
import cn from 'classnames';
import { AlertTriangle } from 'lucide-react';
import { ComponentProps, useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import Button from '@/src/components/ui/Button/Button';
import Loader from '@/src/components/ui/Loader/Loader';
import logo from '@/src/components/ui/Logo/Logo';
import Rating from '@/src/components/ui/Rating/Rating';
import useBoolean from '@/src/hooks/useBoolean';
import { CommentPatchType } from '@/src/types/CommentPatchType';
import { isDev } from '@/src/utils/isDev';

import styles from './CreateCommentSection.module.scss';
import type { CreateCommentSectionProps } from './CreateCommentSection.props';

const CreateCommentSection: VariableFC<
  'section',
  CreateCommentSectionProps,
  'children'
> = ({ className, serviceId, uuid, commentRefetchCallback, ...props }) => {
  const [authorName, setAuthorName] = useState<string | undefined>(undefined);
  const [comment, setComment] = useState<string | undefined>(undefined);
  const [rating, setRating] = useState<1 | 2 | 3 | 4 | 5>(1);

  const [isSending, toggleIsSending, setIsSending] = useBoolean(false);
  const [isError, toggleIsError, setIsError] = useBoolean(false);

  const createNewComment = () => {
    setIsSending(true);
    setIsError(false);

    if (!isUndefined(commentRefetchCallback)) {
      commentRefetchCallback().finally(() => {
        setIsSending(false);
      });
    }

    axios
      .patch<unknown, AxiosResponse<unknown, unknown>, CommentPatchType>(
        `${process.env.API_URL}/comments`,
        {
          name: authorName,
          rating,
          comment,
          serviceId,
          uuid,
        }
      )
      .then(() => {})
      .catch(err => {
        setIsError(true);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  const sharedTextareaProps: ComponentProps<typeof TextareaAutosize> = {
    autoFocus: true,
    cacheMeasurements: true,
    maxRows: Infinity,
  };

  return (
    <section className={cn(styles.createComment, className)} {...props}>
      {isDev() && (
        <div
          className={cn('px-[1em] pt-[1em]')}
          style={{
            lineHeight: '125%',
            wordWrap: 'break-word',
          }}
        >
          <div>UUID: {uuid}</div>
          <div>Service ID: {serviceId}</div>
          <div>
            Name:{' '}
            {isUndefined(authorName) || authorName === '' ? 'None' : authorName}
          </div>
          <div>Rating: {rating}</div>
          <div>
            Comment: {isUndefined(comment) || comment === '' ? 'None' : comment}
          </div>
        </div>
      )}

      <TextareaAutosize
        className={cn(styles.inputField, '!py-0 !min-h-0 font-bold !pt-[1em]')}
        style={{}}
        placeholder={'Ваше имя'}
        content={authorName}
        onChange={ev => {
          setAuthorName(ev.currentTarget.value);
        }}
        {...sharedTextareaProps}
      />

      <TextareaAutosize
        className={cn(styles.inputField, '!pt-[.5em]')}
        placeholder={'Напишите ваш комментарий'}
        content={comment}
        onChange={ev => {
          setComment(ev.currentTarget.value);
        }}
        {...sharedTextareaProps}
      />

      <div className={cn('mx-[1em]')}>
        <Rating
          rating={rating}
          interactive
          hideNumbers
          hideStars={false}
          changeRating={newRating => {
            setRating(newRating);
          }}
        />
      </div>

      <Button
        variant={isError ? 'error' : 'secondary'}
        className={cn(
          'font-semibold py-[.45em] px-[.9em] text-[.75em] rounded-[.65em]',
          'relative',
          styles.submit
        )}
        blocked={isSending}
        onClick={() => {
          createNewComment();
        }}
      >
        <>
          <div
            className={cn(
              'absolute w-full h-full flex justify-center items-center top-0 left-0',
              (!isSending || isError) && 'opacity-0'
            )}
          >
            <Loader className={cn('text-current')} />
          </div>

          <span className={cn(isSending && 'opacity-0', isError && 'hidden')}>
            Отправить
          </span>

          <div
            className={cn(
              !isError && 'hidden',
              'flex gap-[.35em] items-center'
            )}
          >
            <AlertTriangle className={cn('h-[1.25em]')} />
            Ошибка
          </div>
        </>
      </Button>
    </section>
  );
};

export default CreateCommentSection;
