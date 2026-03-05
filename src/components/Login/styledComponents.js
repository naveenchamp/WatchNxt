// styledComponents.js
import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9fafb;
`

export const LoginFormContainer = styled.form`
  width: 100%;
  max-width: 380px;
  background: #ffffff;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Logo = styled.img`
  width: 150px;
  margin: 0 auto 20px;
  color: #0f0f0f;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #475569;
`

export const Input = styled.input`
  height: 42px;
  padding: 0 12px;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: #2563eb;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #334155;
`

export const Button = styled.button`
  height: 42px;
  background: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: #1d4ed8;
  }
`

export const ErrorMsg = styled.p`
  color: #dc2626;
  font-size: 13px;
  margin: 0;
`
