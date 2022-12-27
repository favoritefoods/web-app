import { render, screen } from '@testing-library/react'
import TestProvider from '../partials/TestProvider'
import UserReviews from './UserReviews'

jest.mock('../../hooks/useFavorites', () => {
  return () => {
    return {
      loading: false,
      error: 'there is an error in fetching favorites',
      success: true,
      favorites: [
        { id: 1, name: 'sushi' },
        { id: 2, name: 'pizza' },
      ],
    }
  }
})

describe('UserReviews', () => {
  test('renders selection box and reviews without crashing', () => {
    render(
      <TestProvider>
        <UserReviews />
      </TestProvider>,
    )
    const selectBox = screen.getByLabelText('selectFavs')
    expect(selectBox).toBeInTheDocument()

    const reviewsBox = screen.getByLabelText('reviews-list')
    expect(reviewsBox).toBeInTheDocument()
  })

  test('displays error message if error in fetching favorite foods for select options', async () => {
    render(
      <TestProvider>
        <UserReviews />
      </TestProvider>,
    )
    const errorMsgUserData = screen.getByRole('error-message-userFavs')
    expect(errorMsgUserData).toHaveTextContent('there is an error in fetching favorites')
  })
})
