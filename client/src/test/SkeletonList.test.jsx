import { render, screen } from '@testing-library/react';
import SkeletonList from '../components/UI/Skeleton/SkeletonList.jsx';

describe('Skeleton list test', () => {
    test('Skeleton renders correctly', async () => {
        render(<SkeletonList />);
        const title = screen.queryByText(/all candles/i);
        const skeletonSvg = await screen.getAllByTestId('imgSkeleton')[0];
        expect(title).toBeInTheDocument();
        expect(skeletonSvg).toBeInTheDocument();
        screen.debug();
    });
});
