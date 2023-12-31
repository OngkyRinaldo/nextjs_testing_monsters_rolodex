import { ChangeEvent } from 'react';

export type SearchBoxProps = {
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};
