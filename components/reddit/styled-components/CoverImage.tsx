import styled from '@emotion/styled';


interface CoverImageProps {
    imageUrl?: string;
    imageHeight?: number;
}

export const CoverImage = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.3),
      rgba(0, 0, 0, 0.7)
    ),
    url(${(props: CoverImageProps) => props.imageUrl});
  width: 100%;
  height: ${(props: CoverImageProps) => props.imageHeight};
  background-size: cover;
  color: white;
  padding: 20px;
`;
