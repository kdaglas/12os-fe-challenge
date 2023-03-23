import React, { useState } from 'react';
import MoviesComponent from '../components/MoviesComponent';
import SearchComponent from '../components/SearchComponent';
import Header from '../components/shared/Header';

export interface Props {
}

const Search = (props: Props) => {

    const [title, setTitle] = useState<string>("")

    const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        // if (event.target.value.length > 0) {
        setTitle(event.target.value)
        console.log(event.target.value)
        // } else {
        //     setTitle("man")
        // }

    }


    return (
        <div>
            <Header />
            <SearchComponent title={title} onChangeTitle={onChangeTitle}/>
            <MoviesComponent title={title}/>
        </div>
    );

}

export default Search;
