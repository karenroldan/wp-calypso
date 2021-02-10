/**
 * Internal dependencies
 */
import { WHATS_NEW_LIST_REQUEST, WHATS_NEW_LIST_SET } from 'calypso/state/action-types';

import 'calypso/state/data-layer/wpcom/whats-new/list';
import 'calypso/state/whats-new/init';

export const requestWhatsNewList = () => ( {
	type: WHATS_NEW_LIST_REQUEST,
} );

export const setWhatsNewList = ( list ) => ( {
	type: WHATS_NEW_LIST_SET,
	list,
} );
