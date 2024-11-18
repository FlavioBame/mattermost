// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

import {goToLastViewedChannel} from 'actions/views/channel';

import * as Menu from 'components/menu';

const CloseChannel = (): JSX.Element => {
    return (
        <Menu.Item
            onClick={goToLastViewedChannel}
            labels={
                <FormattedMessage
                    id='center_panel.archived.closeChannel'
                    defaultMessage='Close Channel'
                />}
        />
    );
};

export default React.memo(CloseChannel);
