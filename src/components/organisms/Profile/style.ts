import styled from "styled-components";
import Text from "components/atoms/Text";
export const Container = styled.div`
  position: relative;
  border-bottom: 0.1rem lightgray solid;
`;
export const ProfileContainer = styled.div`
  width: ${({ theme }) => theme.deviceSizes.tabletL};
  margin: 0 auto;
  display: flex;

  @media ${({ theme }) => theme.device.tabletL} {
    width: ${({ theme }) => theme.deviceSizes.tablet};
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: ${({ theme }) => theme.deviceSizes.mobileL};
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: ${({ theme }) => theme.deviceSizes.mobileM};
  }
`;

export const PosterWrapper = styled.div`
  position: relative;
  width: 12rem;
  top: -2rem;
  border: solid white 0.2rem;
  box-shadow: 0 0 2px rgb(0, 0, 0, 30%);
  overflow: hidden;
  border-radius: 5px;
  background-color: white;

  @media ${({ theme }) => theme.device.tablet} {
    width: 9rem;
    position: absolute;
    top: 1.5rem;
    left: calc(50% - 4.5rem);
  }
`;
export const TextContainer = styled.div`
  margin: 1rem;
  flex: 1;
  @media ${({ theme }) => theme.device.tablet} {
    text-align: center;
  }
`;
export const Title = styled(Text)`
  font-size: 2rem;
  font-weight: bold;
  width: 100%;

  @media ${({ theme }) => theme.device.tablet} {
    text-align: center;
  }
`;
export const BriefInfoSpan = styled.span`
  display: inline-block;
`;
export const BriefInfo = styled(Text)`
  width: 100%;
  font-size: 1rem;
  opacity: 50%;
  margin-bottom: 0.5rem;
  @media ${({ theme }) => theme.device.tablet} {
  }
`;
export const Flag = styled.div`
  display: inline-block;
  width: 1.2rem;
  height: 100%;
  margin-right: 0.3rem;
  margin-top: 0.5rem;
`;

export const VoteAverage = styled(Text)`
  border-top: 0.1rem #a9a9a922 solid;
  padding-top: 0.5rem;
  width: 100%;
  @media ${({ theme }) => theme.device.tablet} {
    text-align: center;
  }
`;
