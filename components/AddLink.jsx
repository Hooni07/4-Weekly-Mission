import { styled } from "styled-components";
import Image from "next/image";
import linkImg from "@/public/functionIcon/link.svg";

export default function AddLink({ setIsShowModal }) {
  const showLinkAddModal = (e) => {
    e.preventDefault();
    setIsShowModal((prev) => ({ linkModal: true, folderAddModal: false }));
  };

  return (
    <BackGround>
      <InputBox>
        <Image src={linkImg} alt="링크 사진" className="img-li" width={20} />
        <Input placeholder="링크를 추가해 보세요."></Input>
        <InputButton onClick={showLinkAddModal}>추가하기</InputButton>
      </InputBox>
    </BackGround>
  );
}

const BackGround = styled.div`
  background-color: var(--light-blue);
  display: flex;
  justify-content: center;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  height: 67px;
  padding: 16px 20px;
  border-radius: 15px;
  border: 1px solid var(--primary);
  background: var(--white);
  margin: 60px auto 90px;

  img {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 1199px) {
    width: 704px;
  }
  @media (max-width: 767px) {
    width: 325px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  margin-left: 12px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #9fa6b2;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  @media (max-width: 767px) {
    &::placeholder {
      font-size: 14px;
    }
  }
`;

const InputButton = styled.button`
  width: 80px;
  padding: 10px 26px;
  border-radius: 8px;
  color: #fff;
  background: var(
    --gra-purpleblue-to-skyblue,
    linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
  );
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
