import React from 'react';

const PriceTable = ({ isLoading, items, loadData }) => {
    if (isLoading) {
        return <p>Prices are being loaded. Please wait.</p>;
    }
    
    if (!items || items.length === 0) {
        return (
            <p>
                No data available. <button onClick={loadData}>Try again!</button>
            </p>
        );
    }

    return (
        <table>
            {items.map((item) => (
                <tr key={item.id}>
                    <td>
                        {item.name} ({item.symbol})
                    </td>
                    <td>EUR {item.current_price}</td>
                </tr>
            ))}
            <tr>
                <td colSpan="2">
                    <button onClick={loadData}>Reload</button>
                </td>
            </tr>
        </table>
    );
};

class CryptoPrices extends React.Component {

  state = {
    isLoading: true,
    items: [],
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {
    this.setState(() => ({
      isLoading: true,
    }));
    const { limit } = this.props;
    try {
      const cryptoTicker = await fetch(
        'https://ed-6183456675463168.educative.run:3000' +
        '/api/v3/coins/markets?vs_currency=eur&per_page=' +
        limit.toString()
    );
    const cryptoTickerResponse = await cryptoTicker.json();
    this.setState(() => ({
      isLoading: false,
      items: cryptoTickerResponse,
    }));
  } catch (err) {
    this.setState(() => ({
      isLoading: false,
    }));
  }
};

  render() {

    const { isLoading, items } = this.state;
    const { children } = this.props;

    if (typeof children !== 'function') {
      return null;
    }

    return children({
      isLoading,
      items,
      loadData: this.loadData,
    });
  }
}

function withCryptoPrices(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <CryptoPrices limit={5}>
          {(cryptoPriceProps) => (
            <WrappedComponent {...this.props} {...cryptoPriceProps} />
          )}
        </CryptoPrices>
      );
    }
  };
}

const CryptoPriceTable = withCryptoPrices(PriceTable);

export default class App extends React.Component {
  render() {
    return (
      <CryptoPriceTable />
    );
  }
}