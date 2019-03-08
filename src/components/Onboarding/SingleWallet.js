import React from 'react';
import { connect } from 'react-redux';

import Sidebar from './shared/Sidebar';
import Stepper from './shared/Stepper';
import TwoColumnSidebarLayout from './shared/TwoColumnSidebarLayout';
import SignTransactionStep from './shared/SignTransactionStep';
import faqs from './data/faqs';
import { nicelyFormatWalletProvider } from './utils';

import {
  breakLink,
  initiateLink,
  approveLink,
  mkrApproveProxy,
  mkrApproveSingleWallet
} from '../../reducers/proxy';

import { getAccount, addSingleWalletAccount } from '../../reducers/accounts';

class InitiateLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 0,
      faqs: [],
      useSingleWallet: true
    };
  }

  componentDidMount() {
    console.log('SINGLE WALLET', this.props);
    if (
      this.props.coldWallet.hasProxy &&
      this.props.coldWallet.proxy.hasInfMkrApproval
    ) {
      this.props.onComplete();
    } else if (
      this.props.coldWallet.hasProxy &&
      !this.props.coldWallet.proxy.hasInfMkrApproval
    ) {
      this.toGrantPermissions();
    } else if (this.state.useSingleWallet) {
      // TODO probably don't need this else if any more
      this.toGrantPermissions();
    } else {
      this.toGrantPermissions();
    }
  }

  toInitiateLink = priority => {
    console.log('toInitiateLink2');
    this.props.initiateLink({
      hot: this.props.hotWallet,
      cold: this.props.coldWallet
    });
    this.setState({
      step: 0,
      faqs: []
    });
  };

  toApproveLink = priority => {
    this.props.approveLink({
      hot: this.props.hotWallet,
      cold: this.props.coldWallet
    });
    this.setState({
      step: 1,
      faqs: faqs.approveLink
    });
  };
  // TODO use addAccoutn from accounts.js
  toGrantPermissions = () => {
    console.log('props in single wallet', this.props);
    const step = 3;
    this.props.mkrApproveSingleWallet();

    this.setState({
      step,
      faqs: faqs.grantHotWalletPermissions
    });
  };

  render() {
    console.log('3-SingleWallet state', this.state);
    const {
      hotWallet,
      coldWallet,
      initiateLinkTxHash,
      initiateLinkTxStatus,
      approveLinkTxHash,
      approveLinkTxStatus,
      mkrApproveProxyTxHash,
      mkrApproveProxyTxStatus,
      onComplete
    } = this.props;
    return (
      <TwoColumnSidebarLayout
        sidebar={
          <Sidebar faqs={[]} hotWallet={hotWallet} coldWallet={coldWallet} />
        }
      >
        <div>
          <Stepper step={this.state.step}>
            <SignTransactionStep
              title={`Sign ${nicelyFormatWalletProvider(
                coldWallet.type
              )} transaction`}
              subtitle={`To proceed with setting up your voting contract,
      please sign the transaction in ${nicelyFormatWalletProvider(
        coldWallet.type
      )}.`}
              walletProvider={coldWallet.type}
              status={initiateLinkTxStatus}
              tx={initiateLinkTxHash}
              onNext={this.toApproveLink}
              onRetry={this.toInitiateLink}
              onCancel={this.toChooseTransactionPriority}
            />
            <SignTransactionStep
              title={`Sign ${nicelyFormatWalletProvider(
                hotWallet.type
              )} transaction`}
              subtitle={`To proceed with setting up your voting contract,
      please sign the transaction in ${nicelyFormatWalletProvider(
        hotWallet.type
      )}.`}
              walletProvider={hotWallet.type}
              status={approveLinkTxStatus}
              tx={approveLinkTxHash}
              onRetry={this.toApproveLink}
              onNext={this.toGrantPermissions}
            />
            <SignTransactionStep
              title="Grant hot wallet permissions"
              subtitle="Give your voting contract permission so that your hot wallet can vote with your MKR"
              walletProvider={coldWallet.type}
              status={mkrApproveProxyTxStatus}
              tx={mkrApproveProxyTxHash}
              onRetry={this.toGrantPermissions}
              onNext={onComplete}
            />
            <SignTransactionStep
              title="Single wallet permissions"
              subtitle="Single wallet"
              walletProvider={'coldWallet.type'}
              status={mkrApproveProxyTxStatus}
              tx={mkrApproveProxyTxHash}
              onRetry={this.toGrantPermissions}
              onNext={onComplete}
            />
          </Stepper>
        </div>
      </TwoColumnSidebarLayout>
    );
  }
}

export default connect(
  ({ proxy, onboarding, ...state }) => ({
    hotWallet: getAccount(state, window.maker.currentAddress()),
    coldWallet: getAccount(state, window.maker.currentAddress()),
    skipProxy: onboarding.skipProxy,
    ...proxy
  }),
  {
    breakLink,
    initiateLink,
    approveLink,
    mkrApproveProxy,
    mkrApproveSingleWallet
  }
)(InitiateLink);