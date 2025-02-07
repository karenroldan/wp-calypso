import { Button } from '@automattic/components';
import { localizeUrl } from '@automattic/i18n-utils';
import { Component } from 'react';
import { connect } from 'react-redux';
import { openSupportArticleDialog } from 'calypso/state/inline-support-article/actions';

const postId = 143180;
const postUrl = localizeUrl(
	'https://wordpress.com/support/do-i-need-a-website-a-blog-or-a-website-with-a-blog/'
);

class SupportArticleDialogExample extends Component {
	handleClick = () => {
		this.props.openSupportArticleDialog( { postId, postUrl } );
	};

	render() {
		return (
			<div className="docs__design-assets-group">
				<Button onClick={ this.handleClick }>Show Support Article</Button>
			</div>
		);
	}
}

const ConnectedExample = connect( null, {
	openSupportArticleDialog,
} )( SupportArticleDialogExample );

ConnectedExample.displayName = 'SupportArticleDialog';

export default ConnectedExample;
