import { render, screen, fireEvent } from '@testing-library/react'
import Register from './Register'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import userEvent from '@testing-library/user-event'

const mockCreateUser = jest.fn()

jest.mock('../../hooks/useCreateUser', () => {
  return () => {
    return {
      mutate: mockCreateUser,
      loading: true,
      error: 'There is an error',
      success: true,
    }
  }
})


jest.mock('../partials/Spinner', () => {
  return () => {
    return 'Spinner is displayed'
  }
})


const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom') as any,
  // the success test fails because of this function. But if I get rid of () => I get the same error as before 'cannot initialize' and the ()=> was the solution I found from many places but it doesn't get called (console log doesn't log) Adding an empty function will cause other errors..
 useNavigate: () => mockedUseNavigate,
}));

describe('Register component', () => {
  // test the page renders login form without crashing
  test('renders register form', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <Register />
        </Router>
      </QueryClientProvider>,
    )
    const heading = screen.getByRole('heading')
    expect(heading).toBeInTheDocument()
  })

  // Test input validation on form (all fields should be required)
  test('all fields should be required and user can type', async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <Register />
        </Router>
      </QueryClientProvider>,
    )
    
    const firstNameBox = screen.getByLabelText(/First Name/i)
    const lastNameBox = screen.getByLabelText(/Last Name/i)
    const usernameBox = screen.getByLabelText(/Username/i)
    const emailBox = screen.getByLabelText(/Email Address/i)
    const passwordBox = screen.getByLabelText(/Password/i)

    //all fields required
    expect(firstNameBox).toBeRequired()
    expect(lastNameBox).toBeRequired()
    expect(usernameBox).toBeRequired()
    expect(emailBox).toBeRequired()
    expect(passwordBox).toBeRequired()

    //user can type and change value of Form Textfields
    await userEvent.type(firstNameBox, 'Amy')
    await userEvent.type(lastNameBox, 'Do')
    await userEvent.type(usernameBox, 'aDo')
    await userEvent.type(emailBox, 'ado@g.com')
    await userEvent.type(passwordBox, '12345')

    expect(firstNameBox).toHaveValue('Amy')
    expect(lastNameBox).toHaveValue('Do')
    expect(usernameBox).toHaveValue('aDo')
    expect(emailBox).toHaveValue('ado@g.com')
    expect(passwordBox).toHaveValue('12345')
  })

  // TODO Test onSubmit to call useCreateUser hook
  test('onClick submit button, should post form data', async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <Register />
        </Router>
      </QueryClientProvider>,
    )


    // input form
    const firstNameBox = screen.getByLabelText(/First Name/i) as HTMLInputElement
    const lastNameBox = screen.getByLabelText(/Last Name/i) as HTMLInputElement
    const usernameBox = screen.getByLabelText(/Username/i) as HTMLInputElement
    const emailBox = screen.getByLabelText(/Email Address/i) as HTMLInputElement
    const passwordBox = screen.getByLabelText(/Password/i) as HTMLInputElement

    fireEvent.change(firstNameBox, { target: { value: 'Amy' } })
    fireEvent.change(lastNameBox, { target: { value: 'Do' } })
    fireEvent.change(usernameBox, { target: { value: 'aDo' } })
    fireEvent.change(emailBox, { target: { value: 'aDo@g.com' } })
    fireEvent.change(passwordBox, { target: { value: '12345' } })

    // when button clicked:
    const submitBtn = screen.getByRole('button', {name: /Sign Up/i} )
    await userEvent.click(submitBtn)

    expect(mockCreateUser).toBeCalledWith({
      createUser: {
        username: usernameBox.value,
        firstName: firstNameBox.value,
        lastName: lastNameBox.value,
        email: emailBox.value,
        password: passwordBox.value,
      },
    })
  })
  // TODO Test success case
  test('on userCreate success, reroute to /login', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <Register />
        </Router>
      </QueryClientProvider>,
    )

    expect(mockedUseNavigate).toHaveBeenCalled()

  })


  // TODO Test loading case
  test('when userCreate is loading, display Spinner component', async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <Register />
        </Router>
      </QueryClientProvider>,
    )
    const spinner = screen.getByRole('spinner')
    expect(spinner).toHaveTextContent('Spinner is displayed')

  })

  // TODO Test error case
  test('if userCreater has error, display error message on Register Form', async () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Router>
          <Register />
        </Router>
      </QueryClientProvider>,
    )


    
    const errorMsg = screen.getByRole('error-message')
    expect(errorMsg).toHaveTextContent('There is an error')



  })
})
