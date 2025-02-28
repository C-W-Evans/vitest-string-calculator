import { describe, expect, it } from 'vitest'
import { add } from './js/main.js'

describe('test the funtion add'), () => {
  it('returns 0 for empty string', () => {
    expect(add('')).toBe(0)
  })

  it('returns 1 for "1"', () => {
    expect(add('1')).toBe(1)
  })

  it('returns 3 for "1,2"', () => {
    expect(add('1,2')).toBe(3)
  })

  it('returns 3 for "1\n2"', () => {
    expect(add('1\n2')).toBe(3)
  })

  it('returns error for "1\n"', () => {
    expect(() => add('1/n')).toThrowError('Invalid input')
  })

  it('for //;\n1;2 returns 3', () => {
    expect(add('//;\n1;2')).toBe(3)
  })

  it('returns Exception for -2', () => {
    expect(() => add('-2')).toThrowError('negatives not allowed. -2')
  })
  
  it('returns Exception for -2, -4', () => {
    expect(() => add('-2, -4')).toThrowError('negatives not allowed. [-2, -4]')
  })
  
  it('returns 8 for "1\n"', () => {
    expect(() => add('-2, -4')).toThrowError('negatives not allowed. [-2, -4]')
  })
  
  it('returns 8 for "1\n"', () => {
    expect(() => add('-2, -4')).toThrowError('negatives not allowed. [-2, -4]')
  })
  
}