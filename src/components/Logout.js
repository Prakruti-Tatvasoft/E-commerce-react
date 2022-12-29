import {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../redux/actions'

const Logout = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(logOut())
        localStorage.clear()
        navigate('/', {clearPreviousHistory: true})
    }, [])
  return null
}

export default Logout
