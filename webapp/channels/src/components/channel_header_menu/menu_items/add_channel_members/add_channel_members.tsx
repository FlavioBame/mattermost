// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';
import {useDispatch} from 'react-redux';

import type {Channel} from '@mattermost/types/channels';

import {openModal} from 'actions/views/modals';

import ChannelInviteModal from 'components/channel_invite_modal';
import * as Menu from 'components/menu';

import {ModalIdentifiers} from 'utils/constants';

type Props = {
    channel: Channel;
    isArchived: boolean;
    isGroupConstrained: boolean;
    isDefault: boolean;
}

const AddChannelMembers = ({channel, isArchived, isGroupConstrained, isDefault}: Props): JSX.Element => {
    const dispatch = useDispatch();
    if (isArchived || isGroupConstrained || isDefault) {
        return <></>;
    }

    return (
        <Menu.Item
            id='channelAddMembers'
            onClick={() => {
                dispatch(openModal({
                    modalId: ModalIdentifiers.CHANNEL_INVITE,
                    dialogType: ChannelInviteModal,
                    dialogProps: {channel},
                }),
                );
            }}
            labels={
                <FormattedMessage
                    id='navbar.addMembers'
                    defaultMessage='Add Members'
                />
            }
        />
    );
};

export default React.memo(AddChannelMembers);
