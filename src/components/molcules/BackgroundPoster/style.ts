import styled from "styled-components";
import AspectRatio from "components/atoms/AspectRatio";

export const Wrapper = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
`;

export const ImageWrapper = styled.div`
  width: ${({ theme }) => theme.deviceSizes.tabletL};
  margin: 0 auto;

  @media screen and (max-width: ${({ theme }) => theme.deviceSizes.tabletL}) {
    width: 100%;
  }
`;
export const StyledAspectRatio = styled(AspectRatio)``;
interface BgImgProps {
  src: string;
}
export const BgImg = styled.div<BgImgProps>`
  background: url(${({ src }) => src}) center/cover;
  height: 100%;
  width: 100%;
`;
interface FilterProps {
  color: string;
}
export const Filter = styled.div<FilterProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to right,
      ${({ color }) => color},
      transparent 30%
    ),
    linear-gradient(to left, ${({ color }) => color}, transparent 30%);
  top: 0;
`;
