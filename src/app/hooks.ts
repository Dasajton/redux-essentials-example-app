import { useDispatch, useSelector } from 'react-redux'
import type { AppDistatch, RootState } from './store'

export const useAppDispatch = useDispatch.withTypes<AppDistatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
