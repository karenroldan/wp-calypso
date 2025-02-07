import { GSUITE_BASIC_SLUG, GSUITE_BUSINESS_SLUG } from '@automattic/calypso-products';
import renderer from 'react-test-renderer';
import GSuiteFeatures from '../';

describe( 'GSuiteFeatures', () => {
	test( 'it renders GSuiteFeatures with basic plan', () => {
		const tree = renderer
			.create(
				<GSuiteFeatures domainName={ 'testing123.com' } productSlug={ GSUITE_BASIC_SLUG } />
			)
			.toJSON();

		expect( tree ).toMatchSnapshot();
	} );

	test( 'it renders GSuiteFeatures with business plan', () => {
		const tree = renderer
			.create(
				<GSuiteFeatures domainName={ 'testing123.com' } productSlug={ GSUITE_BUSINESS_SLUG } />
			)
			.toJSON();

		expect( tree ).toMatchSnapshot();
	} );

	test( 'it renders GSuiteFeatures without a productSlug', () => {
		const tree = renderer.create( <GSuiteFeatures domainName={ 'testing123.com' } /> ).toJSON();

		expect( tree ).toMatchSnapshot();
	} );

	test( 'it renders GSuiteFeatures in a list', () => {
		const tree = renderer
			.create(
				<GSuiteFeatures
					domainName={ 'testing123.com' }
					productSlug={ GSUITE_BASIC_SLUG }
					type={ 'list' }
				/>
			)
			.toJSON();

		expect( tree ).toMatchSnapshot();
	} );
} );
