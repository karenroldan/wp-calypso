import {
	GRAVATAR_RECEIVE_IMAGE_FAILURE,
	GRAVATAR_UPLOAD_REQUEST,
} from 'calypso/state/action-types';
import {
	bumpStat,
	composeAnalytics,
	recordTracksEvent,
	withAnalytics,
} from 'calypso/state/analytics/actions';
import { errorNotice } from 'calypso/state/notices/actions';

import 'calypso/state/gravatar-status/init';
import 'calypso/state/data-layer/wpcom/gravatar-upload';

export function uploadGravatar( file, email ) {
	return withAnalytics( recordTracksEvent( 'calypso_edit_gravatar_upload_start' ), {
		type: GRAVATAR_UPLOAD_REQUEST,
		file,
		email,
	} );
}

export const receiveGravatarImageFailed = ( { errorMessage, statName } ) => ( dispatch ) => {
	dispatch(
		withAnalytics(
			composeAnalytics(
				recordTracksEvent( 'calypso_edit_gravatar_file_receive_failure' ),
				bumpStat( 'calypso_gravatar_update_error', statName )
			),
			{
				type: GRAVATAR_RECEIVE_IMAGE_FAILURE,
				errorMessage,
			}
		)
	);
	dispatch( errorNotice( errorMessage, { id: 'gravatar-upload' } ) );
};
