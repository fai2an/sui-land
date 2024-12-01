import React from "react";

interface Token {
  id: number;
  name: string;
  balance: number;
  logo: string;
}

interface TokenListProps {
  tokens: Token[];
  onSelectToken: (token: Token) => void;
}

const TokenList: React.FC<TokenListProps> = ({ tokens, onSelectToken }) => {
  return (
    <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Asset List</h3>
      <ul>
        {tokens.map((token) => (
          <li
            key={token.id}
            className="flex items-center justify-between p-3 bg-gray-100 rounded-lg mb-2 cursor-pointer hover:bg-gray-200"
            onClick={() => onSelectToken(token)}
          >
            <div className="flex items-center">
              <img
                src={token.logo}
                alt={`${token.name} logo`}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {token.name}
                </p>
                <p className="text-xs text-gray-600">
                  {token.balance.toFixed(2)} {token.name}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TokenList;
