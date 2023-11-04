import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 6px;
  padding-left: 40px;
  background-color: #f1f5f9;
  width: 100vw;
  height: 80px;
`
export const Logo = styled.img`
  height: 80%;
`
export const Container = styled.div`
  margin: 10px;
  padding: 10px;
`
export const Select = styled.select`
  padding: 6px;
  width: 400px;
  border: 1px solid #cbd5d1;
  margin-top: 30px;
  margin-left: 30px;
`
export const Option = styled.option`
  color: #475569;
  font-size: 16px;
`
export const ProjectCard = styled.li`
  display: flex;
  flex-direction: column;
  height: 240px;
  width: 240px;
  background-color: #ffffff;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 3px 3px grey;
  margin: 10px;
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 80%;
`
export const ProjectName = styled.p`
  color: #475569;
  font-size: 18px;
  padding: 3px 3px 3px 16px;
`
export const ProjectsContainer = styled.ul`
  margin: 30px;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 80px;
  align-items: center;
  height: 100vh;
`
export const FailureImage = styled.img`
  height: 400px;
  width: 400px;
`
export const FailureHeading = styled.h1`
  color: #475569;
  font-size: 28px;
`
export const FailureDesc = styled.p`
  color: #cbd5e1;
  font-size: 18px;
`

export const RetryButton = styled.button`
  background-color: #328af2;
  color: #ffffff;
  padding: 6px 16px 6px 16px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
