import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from '@/components/ui/Button';

describe('Button Component', () => {
  it('renders children correctly', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies default classes correctly', () => {
    render(<Button data-testid="test-btn">Default Button</Button>);
    const button = screen.getByTestId('test-btn');
    expect(button).toHaveClass('bg-primary-500'); // default variant class
    expect(button).toHaveClass('h-11 px-4 py-2'); // default size class
  });

  it('applies variant classes correctly', () => {
    render(<Button variant="outline" data-testid="test-btn">Outline Button</Button>);
    const button = screen.getByTestId('test-btn');
    expect(button).toHaveClass('border-neutral-200');
  });

  it('handles click events', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Clickable</Button>);
    
    const button = screen.getByRole('button');
    button.click();
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toBeDisabled();
    expect(button).toHaveClass('disabled:opacity-50');
  });
});