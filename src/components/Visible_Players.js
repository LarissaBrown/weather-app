import { connect } from 'react-redux'
import { getWeather } from '../redux/actions'
import Loading from './Loading'
import {  makeSelect_Players } from '../redux/selectors'

const mapStateToProps = (state) => {
  return {
    _players:  makeSelect_Players(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    _players: () => {
      dispatch(getWeather())
    }
  }
}

const Visible_Players = connect(
  mapStateToProps,
  mapDispatchToProps
)(Loading)

export default Visible_Players