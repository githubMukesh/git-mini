import React from 'react';
import {useState} from 'react';
import { Dispatch } from "redux"
import { useDispatch } from "react-redux"
import './search.css'
import { setSearchText, clearSearchText } from '../store/actions/userAction';
import {getUserList} from '../store/asyncActions/userAsyncAction';
import { connect } from 'react-redux';

const Search: any = () => {
    const [text, setText] = useState("");
    const dispatch: Dispatch<any> = useDispatch();
  
    const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
      evt.preventDefault();
      if (text === "") {
        alert("Please enter something!");
      } else {
        dispatch(setSearchText(text));
        dispatch(getUserList(text));
      }
    };

    const onClear = () => {setText(''); dispatch(clearSearchText())};
  
    const onChange = (event: any) => setText(event.target.value);
  
    return (
      <div>
        <form onSubmit={onSubmit} className="bg-gray-200 p-5" autoComplete="off">
          <input
            type="text"
            name="text"
            placeholder="search users..."
            value={text}
            onChange={onChange}
            className="bg-white p-2 w-3/4 outline-none border-0"
          />
          <button type="submit" className="p-2 border-0 text-center text-blue-500 w-1/4 bg-white border-l ml-2">
            Search
          </button>
          <button type="button" onClick = {onClear} className="p-2 border-0 text-center text-blue-500 w-1/4 bg-white border-l ml-2">
            Clear
          </button>
        </form>
      </div>
    );
  };


const mapStateToProps = (state: any) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = {
  getUserList
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);