import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { AddToCartButton } from '@/components/ui/AddToCartButton';
import { useCartStore } from '@/store/cartStore';

// Mock the Zustand store
vi.mock('@/store/cartStore', () => ({
  useCartStore: vi.fn(),
}));

describe('AddToCartButton', () => {
  const mockProduct = {
    id: '123',
    name: 'Test Product',
    price: 100,
    image: '/test.png',
  };

  it('renders correctly', () => {
    (useCartStore as any).mockReturnValue({ addItem: vi.fn() });
    render(<AddToCartButton product={mockProduct} />);
    expect(screen.getByRole('button', { name: /agregar al carrito/i })).toBeInTheDocument();
  });

  it('calls addItem when clicked', () => {
    const addItemMock = vi.fn();
    (useCartStore as any).mockReturnValue({ addItem: addItemMock });
    
    render(<AddToCartButton product={mockProduct} />);
    const button = screen.getByRole('button', { name: /agregar al carrito/i });
    
    fireEvent.click(button);
    expect(addItemMock).toHaveBeenCalledWith(mockProduct);
  });
});