// styledComponents.js
import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(145deg, var(--c-f8fafc) 0%, var(--c-e2e8f0) 100%);
  padding: 20px;
`

export const LoginFormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  background: var(--c-ffffff);
  padding: 32px;
  border-radius: 14px;
  border: 1px solid var(--c-e2e8f0);
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Logo = styled.img`
  width: 150px;
  margin: 0 auto 20px;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: var(--c-475569);
`

export const Input = styled.input`
  height: 42px;
  padding: 0 13px;
  border-radius: 8px;
  border: 1px solid var(--c-cbd5e1);
  font-size: 14px;
  outline: none;

  &:focus {
    border-color: var(--c-3b82f6);
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: var(--c-475569);
`

export const Button = styled.button`
  height: 44px;
  background: var(--c-3b82f6);
  color: var(--c-ffffff);
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background: var(--c-00306e);
  }
`

export const ErrorMsg = styled.p`
  color: var(--c-ff0000);
  font-size: 13px;
  margin: 0;
`
