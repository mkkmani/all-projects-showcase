import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  Header,
  Logo,
  Container,
  Select,
  Option,
  ProjectCard,
  ProjectImage,
  ProjectName,
  ProjectsContainer,
  FailureContainer,
  LoaderContainer,
  FailureImage,
  FailureHeading,
  FailureDesc,
  RetryButton,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusList = {
  init: 'INIT',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Projects extends Component {
  state = {
    category: categoriesList[0].id,
    apiStatus: apiStatusList.init,
    projectsList: [],
  }

  componentDidMount() {
    this.getProjects()
  }

  updateData = data => ({
    id: data.id,
    name: data.name,
    imageUrl: data.image_url,
  })

  getProjects = async () => {
    this.setState({apiStatus: apiStatusList.loading})
    const {category} = this.state

    const apiUrl = `https://apis.ccbp.in/ps/projects?category=${category}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()
      const updatedList = data.projects.map(each => this.updateData(each))
      this.setState({
        projectsList: updatedList,
        apiStatus: apiStatusList.success,
      })
    } else {
      this.setState({apiStatus: apiStatusList.failure})
    }
  }

  onChangeSelect = e => {
    this.setState({category: e.target.value}, this.getProjects)
  }

  ProjectCardItem = props => {
    const {details} = props
    const {name, imageUrl} = details

    return (
      <ProjectCard>
        <ProjectImage src={imageUrl} alt={name} />
        <ProjectName>{name}</ProjectName>
      </ProjectCard>
    )
  }

  renderLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="MutatingDots" color="skyblue" height="60" width="60" />
    </LoaderContainer>
  )

  onClickRetry = () => {
    this.getProjects()
  }

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDesc>
        We cannot seem to find the page you are looking for
      </FailureDesc>
      <RetryButton type="button" onClick={this.onClickRetry}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderSuccessView = () => {
    const {projectsList} = this.state

    return (
      <ProjectsContainer>
        {projectsList.map(each => (
          <this.ProjectCardItem details={each} key={each.id} />
        ))}
      </ProjectsContainer>
    )
  }

  renderProjects = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusList.loading:
        return this.renderLoader()
      case apiStatusList.success:
        return this.renderSuccessView()
      case apiStatusList.failure:
        return this.renderFailureView()

      default:
        return null
    }
  }

  render() {
    const {category} = this.state
    return (
      <>
        <Header>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt="website logo"
          />
        </Header>
        <Select value={category} onChange={this.onChangeSelect}>
          {categoriesList.map(each => (
            <Option value={each.id}>{each.displayText}</Option>
          ))}
        </Select>
        <Container>{this.renderProjects()}</Container>
      </>
    )
  }
}
export default Projects
