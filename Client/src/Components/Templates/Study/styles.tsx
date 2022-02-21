import styled from "styled-components";

const Title = styled.h1`
  padding: 3vw 15vw;
  font-size: 1.6rem;
  font-weight: bold;
  color: #707070;
  text-align: center;
`;

const PosticWrapper = styled.div`
  padding: 2vh 15vw;
  display: flex;
  column-gap: 2vw;
  row-gap: 1vw;
  flex-wrap: wrap;
`;

const ModalContainer = styled.div`
  width: 400px;
  height: 400px;
  background: rgba(255, 240, 155, 0.8);
  display: flex;
  padding: 2vw;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(255, 240, 155, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: 10px 5px 5px rgba(0, 0, 0, 0.2);
  h2 {
    padding: 1rem;
    font-size: large;
  }
`;

const Container = styled.div`
  background-color: hsla(0, 0%, 96.07843137254902%, 0.7);
  padding: 4vw;
`;
export { Title, PosticWrapper, ModalContainer, Container };
