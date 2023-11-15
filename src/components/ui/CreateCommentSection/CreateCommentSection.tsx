'use client';

import { VariableFC } from '@xenopomp/advanced-types';
import { isUndefined } from '@xenopomp/advanced-utils';
import axios, { AxiosResponse } from 'axios';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import Button from '@/src/components/ui/Button/Button';
import Loader from '@/src/components/ui/Loader/Loader';
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
> = ({ className, serviceId, uuid, ...props }) => {
  const [authorName, setAuthorName] = useState<string | undefined>(undefined);
  const [comment, setComment] = useState<string | undefined>(undefined);
  const [rating, setRating] = useState<1 | 2 | 3 | 4 | 5>(1);

  const [isSending, toggleIsSending, setIsSending] = useBoolean(false);

  const createNewComment = () => {
    setIsSending(true);

    return;

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
      .catch(err => {})
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className={cn(styles.createComment, className)} {...props}>
      {isDev() && (
        <div
          className={cn('')}
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
        className={cn(styles.inputField, '!py-0 !min-h-0 font-bold')}
        style={{}}
        autoFocus
        placeholder={'Ваше имя'}
        content={authorName}
        onChange={ev => {
          setAuthorName(ev.currentTarget.value);
        }}
      />

      <TextareaAutosize
        className={cn(styles.inputField, '!pt-[.5em]')}
        autoFocus
        placeholder={'Напишите ваш комментарий'}
        content={comment}
        onChange={ev => {
          setComment(ev.currentTarget.value);
        }}
      />

      <div className={cn('mx-[1em]')}>
        <Rating rating={rating} interactive hideNumbers hideStars={false} />
      </div>

      <Button
        variant={'secondary'}
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
              !isSending && 'opacity-0'
            )}
          >
            <Loader className={cn('text-current')} />
          </div>

          <span className={cn(isSending && 'opacity-0')}>Отправить</span>
        </>
      </Button>
    </section>
  );
};

export default CreateCommentSection;
