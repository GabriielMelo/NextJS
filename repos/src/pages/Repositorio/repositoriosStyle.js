import { Link } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  padding: 30px;
  max-width: 700px;
  margin: 80px auto;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 140px;
    border-radius: 20%;
    margin: 20px 0;
  }
  h1 {
    font-size: 30px;
    color: #0d2636;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    color: #000;
    text-align: center;
    line-height: 1.4;
    max-width: 400px;
  }
`;
export const BackButton = styled(Link)`
  border: 0;
  outline: 0;
  background-color: transparent;
`;
export const Loading = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const IssuesList = styled.ul`
  list-style: none;
  margin-top: 10px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  li {
    display: flex;
    padding: 15px 10px;

    & + li {
      margin-top: 12px;
    }
  }
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid #0d2636;
  }
  div {
    flex: 1;
    margin-left: 12px;
  }

  p {
    margin-top: 10px;
    font-size: 12px;
    color: #000;
  }

  strong {
    font-size: 15px;

    a {
      text-decoration: none;
      color: #222;

      &:hover {
        color: #0071db;
      }
    }
    span {
      background-color: #222;
      color: #fff;
      border-radius: 4px;
      font-weight: 600;
      padding: 2px 4px;
      margin-left: 10px;
    }
  }
`;

export const PageAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  button {
    border: none;
    outline: 0;

    padding: 10px;
    border-radius: 4px;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
    }
  }
`;

export const StatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-top: 20px;

  button {
    border: none;
    outline: 0;
    background-color: #222;
    color: #eee;
    padding: 5px 10px;
    border-radius: 4px;
    &:hover {
      background-color: #444;
      transition: background-color 0.4s;
    }
  }
`;
