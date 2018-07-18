import { connect } from 'react-redux';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { modalOpen } from '../reducers/modal';
import { getActiveAccount } from '../reducers/accounts';
import theme, { colors, fonts } from '../theme';
import DotSpacer from './DotSpacer';
import {
  Banner,
  BannerHeader,
  BannerBody,
  BannerContent,
  BannerButton
} from './Banner';
import { cutMiddle } from '../utils/misc';
import Lock from './modals/Lock';
import Withdraw from './modals/Withdraw';

const SmallText = styled.p`
  margin-top: 20px;
  margin-bottom: 16px;
  text-align: left;
  line-height: 1.8;
  font-size: ${fonts.size.small};
  color: ${theme.text.dim_grey};
`;

const Value = styled.span`
  color: rgb(${colors.black});
`;

const WelcomeBanner = ({ modalOpen }) => {
  return (
    <Banner>
      <BannerBody>
        <BannerHeader>Welcome to the governance voting dashboard</BannerHeader>
        <BannerContent>
          Before you can get started voting you will need to set up a secure
          voting contract
        </BannerContent>
      </BannerBody>
      <BannerButton onClick={() => modalOpen('PROXY_SETUP')}>
        Set up now
      </BannerButton>
    </Banner>
  );
};

const Padding = styled.div`
  height: 20px;
`;

const VoterStatus = ({ account, network, modalOpen }) => {
  if (!account) return <Padding />;
  if (!account.proxy.isSetup) return <WelcomeBanner modalOpen={modalOpen} />;

  const domain = `${network === 'kovan' ? 'kovan.' : ''}etherscan.io`;
  const etherscanUrl = `https://${domain}/address/${account.address}`;
  return (
    <SmallText>
      In voting contract <Value>{account.proxy.balance} MKR</Value>{' '}
      <a onClick={() => modalOpen(Withdraw)}>Withdraw to wallet</a>
      <DotSpacer />
      In wallet <Value>{account.coldWallet.balance} MKR</Value>{' '}
      <a onClick={() => modalOpen(Lock)}>Add to voting contract</a>
      <DotSpacer />
      Hot wallet address {cutMiddle(account.address)}{' '}
      <a target="_blank" href={etherscanUrl}>
        Etherscan
      </a>
      <br />
      Currently voting for{' '}
      <Link to="/foundation-proposal/vote-yes-to-the-five-core-principles-of-the-maker-governance-philosophy">
        Vote YES to the five core principles of the Maker Governance philosophy
      </Link>
    </SmallText>
  );
};

const mapStateToProps = state => ({
  account: getActiveAccount(state),
  network: state.metamask.network
});

export default connect(
  mapStateToProps,
  { modalOpen }
)(VoterStatus);
