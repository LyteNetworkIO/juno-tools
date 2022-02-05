import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { ImArrowRight2 } from 'react-icons/im'
import { useTheme } from 'contexts/theme'

const Home: NextPage = () => {
  const theme = useTheme()

  return (
    <div className="h-3/4 w-3/4">
      <h1 className="text-6xl font-bold text-center">Airdrop Creation</h1>

      <div
        className={`flex flex-wrap items-center justify-around mt-6 max-w-full ${
          theme.isDarkTheme ? 'border-gray/20' : 'border-dark/20'
        }`}
      >
        <Link href="/airdrops/create" passHref>
          <button className="p-6 mt-6 text-left border w-96 rounded-xl">
            <h3 className="text-2xl font-bold">
              Create a New Airdrop
              <ImArrowRight2 className="ml-3" />
            </h3>
          </button>
        </Link>
      </div>

      <div
        className={`flex flex-wrap items-center justify-around mt-6 max-w-full ${
          theme.isDarkTheme ? 'border-gray/20' : 'border-dark/20'
        }`}
      >
        <Link href="/airdrops/register" passHref>
          <button className="p-6 mt-6 text-left border w-96 rounded-xl">
            <h3 className="text-2xl font-bold">
              Register an Airdrop
              <ImArrowRight2 className="ml-3" />
            </h3>
          </button>
        </Link>
      </div>

      <div
        className={`flex flex-wrap items-center justify-around mt-6 max-w-full ${
          theme.isDarkTheme ? 'border-gray/20' : 'border-dark/20'
        }`}
      >
        <Link href="/airdrops/fund" passHref>
          <button className="p-6 mt-6 text-left border w-96 rounded-xl">
            <h3 className="text-2xl font-bold">
              Send Funds to an Airdrop
              <ImArrowRight2 className="ml-3" />
            </h3>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
