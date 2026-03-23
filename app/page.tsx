"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function KaitoriTopPage() {

  const visitFlowSteps = [
    {
      step: "STEP 1",
      title: "ご来店・ご相談",
      text: "売りたいお品物をお持ちのうえ、お気軽にご来店ください。",
    },
    {
      step: "STEP 2",
      title: "無料査定",
      text: "専門スタッフが一点ずつ丁寧に査定し、金額をご案内します。",
    },
    {
      step: "STEP 3",
      title: "その場でお支払い",
      text: "査定額にご納得いただけましたら、その場で現金買取いたします。",
    },
  ];

  const itemCards = [
    {
      title: "ブランドバッグ",
      brands: "ヴィトン / シャネル / エルメス など",
      note: "人気モデルはもちろん、使用感のあるお品物もご相談ください。",
    },
    {
      title: "時計",
      brands: "ロレックス / 高級時計 各種",
      note: "付属品がなくても査定可能です。まずはお気軽にお持ち込みください。",
    },
    {
      title: "貴金属",
      brands: "金 / プラチナ / ジュエリー",
      note: "切れたネックレス、片方だけのピアスなども査定対象です。",
    },
    {
      title: "ジュエリー",
      brands: "ダイヤ / 色石 / デザインジュエリー",
      note: "古いデザインのお品物についてもご相談いただけます。",
    },
    {
      title: "小物・アクセサリー",
      brands: "財布 / アクセ / 小物類",
      note: "ブランドによりお値段がつくケースがあります。",
    },
    {
      title: "その他",
      brands: "店頭にてご相談",
      note: "詳しい対象品目は店頭でご案内いたします。",
    },
  ];

  const redBandPoints = [
    {
      title: "査定だけでもOK",
      text: "「売るかどうか迷っている」「金額を確認したいだけ」という方も大歓迎。無理なお買取りは一切ありませんので、お気軽にお越しください。",
    },
    {
      title: "査定料・手数料すべて無料",
      text: "査定にかかる費用はいただきません。手数料も一切不要です。その場でお断りされた場合も、もちろん費用は0円です。",
    },
    {
      title: "複数の販売ルートを比較",
      text: "国内・海外の複数の販路を活用し、高水準の査定額を提示。誠実な査定で「思ったより高かった」と喜ばれています。",
    },
    {
      title: "押し買いは一切行いません",
      text: "お客様の意思を大切にし、無理に売却をおすすめすることはありません。ご納得いただけた場合のみお売りください。",
    },
  ];

  const faqs = [
    {
      q: "査定だけでも可能ですか？",
      a: "はい、査定のみのご相談も歓迎しております。売却を迷われている段階でもお気軽にご来店ください。",
    },
    {
      q: "古いものや使用感があるものでも見てもらえますか？",
      a: "はい、状態が気になるお品物でも査定可能です。まずは一度ご相談ください。",
    },
    {
      q: "1点だけでも持ち込みできますか？",
      a: "もちろん可能です。1点からでもお気軽にご利用いただけます。",
    },
    {
      q: "箱や保証書がなくても大丈夫ですか？",
      a: "本体のみでも査定可能です。付属品がある場合は一緒にお持ちいただくと査定の参考になります。",
    },
    {
      q: "その場で査定してもらえますか？",
      a: "混雑状況やお品物によりますが、店頭で順次ご案内しております。",
    },
  ];

  const smoothScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#f4f4f4] text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/img/logo-red.svg"
              alt="あなたの鑑定士"
              width={150}
              height={42}
              className="h-8 w-auto md:h-9"
            />
          </Link>

          {/* PCメニュー */}
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#flow" className="transition hover:text-[#C5292B]">
              ご利用の流れ
            </a>
            <a href="#reason" className="transition hover:text-[#C5292B]">
              選ばれる理由
            </a>
            <a href="#items" className="transition hover:text-[#C5292B]">
              買取品目
            </a>
            <a href="#faq" className="transition hover:text-[#C5292B]">
              よくあるご質問
            </a>
            <a href="#store" className="transition hover:text-[#C5292B]">
              店舗情報
            </a>
          </nav>

          {/* スマホメニュー */}
          <details className="group relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
              <span className="relative block h-[26px] w-[26px]">
                <i className="ri-menu-line absolute inset-0 text-[26px] text-zinc-900 transition-all duration-300 ease-out group-open:scale-0 group-open:opacity-0" />
                <i className="ri-close-line absolute inset-0 text-[26px] text-zinc-900 scale-0 opacity-0 transition-all duration-300 ease-out group-open:scale-100 group-open:opacity-100" />
              </span>
            </summary>

            <div className="fixed left-0 top-[56px] z-50 w-full border-t border-gray-100 bg-white px-4 py-4 shadow-lg">
              <a
                href="#flow"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-red-50 hover:text-[#C5292B]"
              >
                ご利用の流れ
              </a>

              <a
                href="#reason"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-red-50 hover:text-[#C5292B]"
              >
                選ばれる理由
              </a>

              <a
                href="#items"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-red-50 hover:text-[#C5292B]"
              >
                買取品目
              </a>

              <a
                href="#faq"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-red-50 hover:text-[#C5292B]"
              >
                よくあるご質問
              </a>

              <a
                href="#store"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-zinc-800 transition hover:bg-red-50 hover:text-[#C5292B]"
              >
                店舗情報
              </a>
            </div>
          </details>
        </div>
      </header>
      
      {/* メイン */}
      <section className="bg-[#e53935] text-white">
        <div className="grid mx-auto max-w-6xl items-center gap-8 px-4 pb-16 pt-10 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-20 lg:pt-14">
          <div className="max-w-[620px] text-center lg:text-left">
            <h1 className="mt-5 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
              あなたの"大切な物"を
              <span className="mt-2 block">安心して相談できる</span>
              <span className="mt-2 block">買取店。</span>
            </h1>

            {/* スマホ用画像 */}
            <div className="mt-6 flex justify-center lg:hidden">
              <div className="w-full max-w-[280px]">
                <Image
                  src="/img/main2.png"
                  alt="ブランド品や買取イメージ"
                  width={920}
                  height={1100}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>

            <p className="mt-6 max-w-xl text-sm leading-7 text-white/90 md:text-base">
              売るかどうか迷っている段階でも、まずはお気軽にご相談ください。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#flow"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#C5292B]"
              >
                査定の流れを見る
              </a>
              <a
                href="#store"
                className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
              >
                店舗情報を見る
              </a>
            </div>
          </div>
          
          {/* メインの右側画像 */}
          <div className="hidden lg:flex justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[330px] md:max-w-[390px] lg:max-w-[460px]">
              <Image
                src="/img/main2.png"
                alt="ブランド品や買取イメージ"
                width={920}
                height={1100}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-6 border-t border-white/20 pt-6 pb-6 text-white">

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center">
                <i className="ri-award-line text-xl text-red-200" />
              </div>
              <span className="text-sm">査定料0円</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center">
                <i className="ri-hand-heart-line text-xl text-red-200" />
              </div>
              <span className="text-sm">手数料0円</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center">
                <i className="ri-chat-smile-2-line text-xl text-red-200" />
              </div>
              <span className="text-sm">査定のみOK</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center">
                <i className="ri-money-cny-circle-line text-xl text-red-200" />
              </div>
              <span className="text-sm">即日現金払い</span>
            </div>

          </div>
        </div>
      </section>

      <section id="flow" className="bg-white px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          
          {/* 見出し */}
          <div className="text-center">
            <p className="text-xs tracking-[0.2em] text-[#b3261e]">HOW IT WORKS</p>

            <h2 className="mt-2 text-xl font-bold md:text-3xl font-serif text-[#111827]">
              ご利用の流れ
            </h2>

            <div className="mx-auto mt-3 h-[2px] w-10 bg-[#b3261e]" />

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6b7280]">
              来店から現金受け取りまで、たったの3ステップ。<br />
              むずかしいお手続きは一切ありません。
            </p>
          </div>

          {/* ステップ */}
          <div className="relative mt-12 grid gap-10 md:grid-cols-3 md:gap-8">

            {/* 横線 */}
            <div className="pointer-events-none absolute left-1/2 top-[58px] hidden h-px w-[54%] -translate-x-1/2 bg-[#f3dede] md:block" />

            {/* 1 */}
            <div className="relative text-center">
              <div className="relative mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full border border-[#f3d6d6] bg-[#fbf3f3]">
                <i className="ri-store-2-line text-[36px] text-[#a81d1d]" />
                <div className="absolute -right-1 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#b21717] text-xs font-bold text-white">
                  1
                </div>
              </div>

              <div className="mt-4 inline-flex rounded-full bg-[#f8ecec] px-3 py-1 text-xs text-[#b3261e]">
                予約不要・当日OK
              </div>

              <h3 className="mt-4 text-lg font-bold">
                ご来店
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-[#6b7280]">
                店舗までお気軽にお越しください。予約なしでご利用いただけます。
              </p>
            </div>

            {/* 2 */}
            <div className="relative text-center">
              <div className="relative mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full border border-[#f3d6d6] bg-[#fbf3f3]">
                <i className="ri-search-eye-line text-[36px] text-[#a81d1d]" />
                <div className="absolute -right-1 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#b21717] text-xs font-bold text-white">
                  2
                </div>
              </div>

              <div className="mt-4 inline-flex rounded-full bg-[#f8ecec] px-3 py-1 text-xs text-[#b3261e]">
                査定料0円
              </div>

              <h3 className="mt-4 text-lg font-bold">
                無料査定
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-[#6b7280]">
                専門スタッフが丁寧に査定いたします。
                査定中は何でもご質問ください。もちろん断ってもOKです。
              </p>
            </div>

            {/* 3 */}
            <div className="relative text-center">
              <div className="relative mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full border border-[#f3d6d6] bg-[#fbf3f3]">
                <i className="ri-money-cny-circle-line text-[36px] text-[#a81d1d]" />
                <div className="absolute -right-1 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-[#b21717] text-xs font-bold text-white">
                  3
                </div>
              </div>

              <div className="mt-4 inline-flex rounded-full bg-[#f8ecec] px-3 py-1 text-xs text-[#b3261e]">
                即日現金払い
              </div>

              <h3 className="mt-4 text-lg font-bold">
                現金でお支払い
              </h3>

              <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-[#6b7280]">
                ご納得いただいた場合のみ、その場で現金をお渡しします。
                銀行振込にも対応しています。
              </p>
            </div>

          </div>

          {/* 下 */}
          <div className="mt-12 rounded-xl border border-[#f3e3e3] bg-[#fbf6f6] px-5 py-5 md:px-8 md:py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f6dede]">
                <i className="ri-information-line text-lg text-[#a81d1d]" />
              </div>

              <div>
                <h3 className="text-sm font-bold">
                  出張買取もご相談ください
                </h3>
                <p className="mt-1 text-xs text-[#6b7280] leading-6">
                  「持って行くのが大変」という方は、出張買取もご相談いただけます。
                </p>
              </div>
            </div>

            <a
              href="tel:0120921464"
              className="inline-flex items-center justify-center rounded-lg bg-[#b21717] px-5 py-2 text-xs font-bold text-white"
            >
              電話でご相談
            </a>
          </div>

        </div>
      </section>

      <section id="reason" className="scroll-mt-24 bg-[#e81f1f] py-14 text-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">安心してご相談いただける4つの理由</h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-4">

            {/* 1 */}
            <div className="text-center">
             <div className="relative mx-auto h-32 w-32 md:h-32 md:w-32">
                <Image
                  src="/img/reason01.jpg"
                  alt="理由1"
                  width={96}
                  height={96}
                  className="h-full w-full rounded-full object-cover border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-[#C5292B] shadow">
                  1
                </div>
              </div>

              <h3 className="mt-4 text-base font-bold">
                査定だけでもOK
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/85">
                「売るかどうか迷っている」「金額を確認したいだけ」という方も大歓迎。お気軽にお越しください。
              </p>
            </div>

            {/* 2 */}
            <div className="text-center">
              <div className="relative mx-auto h-32 w-32 md:h-32 md:w-32">
                <Image
                  src="/img/reason2.jpg"
                  alt="理由2"
                  width={96}
                  height={96}
                  className="h-full w-full rounded-full object-cover border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-[#C5292B] shadow">
                  2
                </div>
              </div>

              <h3 className="mt-4 text-base font-bold">
                査定料・手数料すべて無料
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/85">
                査定にかかる費用はいただきません。手数料も一切不要です。その場でお断りされた場合も、もちろん費用は0円です。
              </p>
            </div>

            {/* 3 */}
            <div className="text-center">
              <div className="relative mx-auto h-32 w-32 md:h-32 md:w-32">
                <Image
                  src="/img/reason3.jpg"
                  alt="理由3"
                  width={96}
                  height={96}
                  className="h-full w-full rounded-full object-cover border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-[#C5292B] shadow">
                  3
                </div>
              </div>

              <h3 className="mt-4 text-base font-bold">
                複数の販売ルートを比較
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/85">
                国内・海外の複数の販路を活用し、高水準の査定額を提示。誠実な査定で「思ったより高かった」と喜ばれています。
              </p>
            </div>

            {/* 4 */}
            <div className="text-center">
              <div className="relative mx-auto h-32 w-32 md:h-32 md:w-32">
                <Image
                  src="/img/reason04.jpg"
                  alt="理由4"
                  width={96}
                  height={96}
                  className="h-full w-full rounded-full object-cover border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-[#C5292B] shadow">
                  4
                </div>
              </div>

              <h3 className="mt-4 text-base font-bold">
                押し買いは一切行いません
              </h3>

              <p className="mt-2 text-sm leading-6 text-white/85">
                お客様の意思を大切にし、無理矢理お買取りをすることはありません。ご納得いただけた場合のみお売りください。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="rounded-2xl border border-red-100 bg-red-50/50 px-6 py-8 md:px-10 md:py-10">
            
            {/* 見出し */}
            <h2 className="text-center text-[18px] md:text-[20px] font-bold text-[#111827]">
              お買取りに必要なものは
              <span className="text-[#C5292B]">身分証のみ！</span>
            </h2>

            {/* 本文 */}
            <p className="mt-4 text-[14px] leading-6 text-gray-700">
              古物営業法により本人確認書類（身分証）の提示が必要となります。
              運転免許証、マイナンバーカード、パスポート、在留カードなど、<br/>
              現住所・氏名・生年月日が確認できる身分証をご持参ください。
            </p>

            {/* 補足（任意） */}
            <div className="mt-5 flex items-start gap-2 text-[13px] text-gray-500">
              <i className="ri-information-line text-base mt-[2px]" />
              <p>
                ※ご成約時に必要となります。査定のみの場合は不要です。
              </p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {/* 1 */}
              <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-white py-3 text-sm font-medium text-gray-800">
                運転免許証
              </div>

              {/* 2 */}
              <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-white py-3 text-sm font-medium text-gray-800">
                パスポート
              </div>

              {/* 3 */}
              <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-white py-3 text-sm font-medium text-gray-800">
                マイナンバーカード
              </div>

              {/* 4 */}
              <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-white py-3 text-sm font-medium text-gray-800">
                在留カード
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="items" className="bg-[#f8f4f4] px-4 py-12 md:px-6 md:py-16">
        <div className="mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <p className="text-xs tracking-[0.2em] text-[#b3261e]">ITEMS</p>
            <h2 className="mt-2 text-xl font-bold md:text-3xl font-serif text-[#111827]">
              買取品目
            </h2>
            <div className="mx-auto mt-3 h-[2px] w-10 bg-[#b3261e]" />
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6b7280]">
              ブランド品から時計、貴金属、衣類まで幅広く査定しております。
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {/* 1 */}
            <div className="overflow-hidden rounded-[24px] border border-[#efc5c5] bg-white">
              <div className="relative aspect-[1.6/1] w-full">
                <Image
                  src="/img/item-bag.jpg"
                  alt="ブランドバッグ・小物"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[16px] font-bold leading-7 text-[#111827]">
                    ブランドバッグ・小物
                  </h3>
                  <span className="shrink-0 rounded-full bg-[#faeded] px-3 py-1 text-xs font-medium text-[#b3261e]">
                    状態問わずOK
                  </span>
                </div>

                <p className="mt-3 text-[14px] leading-7 text-[#6b7280]">
                  ルイ・ヴィトン、シャネル、エルメス、グッチ、プラダなど
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="overflow-hidden rounded-[24px] border border-[#e6e6e6] bg-white">
              <div className="relative aspect-[1.6/1] w-full">
                <Image
                  src="/img/item-watch.jpg"
                  alt="高級時計"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[16px] font-bold leading-7 text-[#111827]">
                    高級時計
                  </h3>
                  <span className="shrink-0 rounded-full bg-[#faeded] px-3 py-1 text-xs font-medium text-[#b3261e]">
                    動かなくてもOK
                  </span>
                </div>

                <p className="mt-3 text-[14px] leading-7 text-[#6b7280]">
                  ロレックス、オメガ、カルティエ、パネライ など
                </p>
              </div>
            </div>

            {/* 3 */}
            <div className="overflow-hidden rounded-[24px] border border-[#e6e6e6] bg-white">
              <div className="relative aspect-[1.6/1] w-full">
                <Image
                  src="/img/item-jewelry.jpg"
                  alt="金・プラチナ・宝石"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[16px] font-bold leading-7 text-[#111827]">
                    金・プラチナ・宝石
                  </h3>
                  <span className="shrink-0 rounded-full bg-[#faeded] px-3 py-1 text-xs font-medium text-[#b3261e]">
                    壊れていてもOK
                  </span>
                </div>

                <p className="mt-3 text-[14px] leading-7 text-[#6b7280]">
                  金製品、プラチナ、ダイヤモンド、真珠、ルビー など
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="overflow-hidden rounded-[24px] border border-[#e6e6e6] bg-white">
              <div className="relative aspect-[1.6/1] w-full">
                <Image
                  src="/img/item-wear.jpg"
                  alt="ブランド衣類・着物"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[16px] font-bold leading-7 text-[#111827]">
                    ブランド衣類・着物
                  </h3>
                  <span className="shrink-0 rounded-full bg-[#faeded] px-3 py-1 text-xs font-medium text-[#b3261e]">
                    未使用・保管品もOK
                  </span>
                </div>

                <p className="mt-3 text-[14px] leading-7 text-[#6b7280]">
                  シャネル、ヴァレンティノ、着物・振袖・帯 など
                </p>
              </div>
            </div>

            {/* 5 */}
            <div className="overflow-hidden rounded-[24px] border border-[#e6e6e6] bg-white">
              <div className="relative aspect-[1.6/1] w-full">
                <Image
                  src="/img/item-other.jpg"
                  alt="その他ブランド品"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-[16px] font-bold leading-7 text-[#111827]">
                    その他ブランド品
                  </h3>
                  <span className="shrink-0 rounded-full bg-[#faeded] px-3 py-1 text-xs font-medium text-[#b3261e]">
                    まずはご相談ください
                  </span>
                </div>

                <p className="mt-3 text-[14px] leading-7 text-[#6b7280]">
                  バカラ、ウェッジウッド、食器・置物、絵画 など
                </p>
              </div>
            </div>

            {/* 6 CTA */}
            <div className="flex min-h-[100%] flex-col justify-between rounded-[24px] bg-[#b21717] p-6 text-white">
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/10">
                  <i className="ri-question-line text-2xl" />
                </div>

                <h3 className="mt-6 text-[18px] font-bold leading-9">
                  掲載のない品物も
                  <br />
                  ご相談ください
                </h3>

                <p className="mt-4 text-[14px] leading-8 text-white/90">
                  記載のないお品物でも査定可能な場合があります。
                  まずはお気軽にお声がけください。
                </p>
              </div>

              <a
                href="tel:0120921464"
                className="mt-8 inline-flex min-h-[56px] items-center justify-center gap-2 rounded-[18px] border border-white/25 bg-white/10 px-5 text-[14px] font-bold text-white transition hover:bg-white/15"
              >
                <i className="ri-phone-line text-base" />
                お電話でご相談
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-4 py-2 text-[14px] text-[#4b5563]">
              <i className="ri-checkbox-circle-fill text-[#b3261e]" />
              壊れていてもOK
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-4 py-2 text-[14px] text-[#4b5563]">
              <i className="ri-checkbox-circle-fill text-[#b3261e]" />
              傷・汚れありOK
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-4 py-2 text-[14px] text-[#4b5563]">
              <i className="ri-checkbox-circle-fill text-[#b3261e]" />
              年代物もOK
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-4 py-2 text-[14px] text-[#4b5563]">
              <i className="ri-checkbox-circle-fill text-[#b3261e]" />
              箱なしでもOK
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-[#e7e7e7] bg-white px-4 py-2 text-[14px] text-[#4b5563]">
              <i className="ri-checkbox-circle-fill text-[#b3261e]" />
              複数点まとめてOK
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="rounded-[2rem] bg-white p-6 shadow-sm md:p-8">
          <div className="text-center">
            <p className="text-sm font-bold tracking-wide text-[#C5292B]">FAQ</p>
            <h2 className="mt-2 mb-4 text-xl font-bold md:text-3xl">よくあるご質問</h2>
            <div className="mx-auto mt-3 h-[2px] w-10 bg-[#b3261e]" />
          </div>

          <div className="mt-4 space-y-3">
            {/* 1 */}
            <details className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-colors duration-200 hover:border-red-100">
              <summary className="flex list-none items-center gap-3 px-5 py-4 cursor-pointer">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-800">
                  Q
                </span>
                <span className="flex-1 text-[16px] font-semibold leading-6 text-gray-800">
                  査定だけでも来店できますか？
                </span>
                <i className="ri-arrow-down-s-line text-lg text-gray-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-4">
                <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b21b1b] text-xs font-bold text-white">
                    A
                  </span>
                  <p className="text-[14px] leading-6 text-gray-600">
                    はい。査定だけのご来店も歓迎しております。金額を確認してから売るかどうか決めていただけますので、まずはお気軽にご相談ください。
                  </p>
                </div>
              </div>
            </details>

            {/* 2 */}
            <details className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-colors duration-200 hover:border-red-100">
              <summary className="flex list-none items-center gap-3 px-5 py-4 cursor-pointer">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-800">
                  Q
                </span>
                <span className="flex-1 text-[16px] font-semibold leading-6 text-gray-800">
                  査定料や手数料はかかりますか？
                </span>
                <i className="ri-arrow-down-s-line text-lg text-gray-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-4">
                <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b21b1b] text-xs font-bold text-white">
                    A
                  </span>
                  <p className="text-[14px] leading-6 text-gray-600">
                    いいえ。査定料・手数料はすべて無料です。ご納得いただけなかった場合でも、費用は一切かかりませんので安心してご利用ください。
                  </p>
                </div>
              </div>
            </details>

            {/* 3 */}
            <details className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-colors duration-200 hover:border-red-100">
              <summary className="flex list-none items-center gap-3 px-5 py-4 cursor-pointer">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-800">
                  Q
                </span>
                <span className="flex-1 text-[16px] font-semibold leading-6 text-gray-800">
                  壊れている・傷がある品物でも買取できますか？
                </span>
                <i className="ri-arrow-down-s-line text-lg text-gray-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-4">
                <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b21b1b] text-xs font-bold text-white">
                    A
                  </span>
                  <p className="text-[14px] leading-6 text-gray-600">
                    はい。状態によって査定額は変わりますが、傷や使用感があるお品物でも査定できる場合があります。まずは一度お持ちください。
                  </p>
                </div>
              </div>
            </details>

            {/* 4 */}
            <details className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-colors duration-200 hover:border-red-100">
              <summary className="flex list-none items-center gap-3 px-5 py-4 cursor-pointer">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-800">
                  Q
                </span>
                <span className="flex-1 text-[16px] font-semibold leading-6 text-gray-800">
                  その場で現金を受け取ることはできますか？
                </span>
                <i className="ri-arrow-down-s-line text-lg text-gray-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-4">
                <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b21b1b] text-xs font-bold text-white">
                    A
                  </span>
                  <p className="text-[14px] leading-6 text-gray-600">
                    はい。査定額にご納得いただけましたら、その場で現金にてお支払い可能です。ご希望に応じて銀行振込にも対応しております。
                  </p>
                </div>
              </div>
            </details>

            {/* 5 */}
            <details className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-colors duration-200 hover:border-red-100">
              <summary className="flex list-none items-center gap-3 px-5 py-4 cursor-pointer">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-800">
                  Q
                </span>
                <span className="flex-1 text-[16px] font-semibold leading-6 text-gray-800">
                  複数の商品をまとめて査定できますか？
                </span>
                <i className="ri-arrow-down-s-line text-lg text-gray-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-4">
                <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b21b1b] text-xs font-bold text-white">
                    A
                  </span>
                  <p className="text-[14px] leading-6 text-gray-600">
                    はい。ブランド品や時計、貴金属など複数まとめてお持ち込みいただけます。
                  </p>
                </div>
              </div>
            </details>

            {/* 6 */}
            <details className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-colors duration-200 hover:border-red-100">
              <summary className="flex list-none items-center gap-3 px-5 py-4 cursor-pointer">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-800">
                  Q
                </span>
                <span className="flex-1 text-[16px] font-semibold leading-6 text-gray-800">
                  予約は必要ですか？
                </span>
                <i className="ri-arrow-down-s-line text-lg text-gray-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-4">
                <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b21b1b] text-xs font-bold text-white">
                    A
                  </span>
                  <p className="text-[14px] leading-6 text-gray-600">
                    予約なしでもご来店いただけます。※水曜定休
                  </p>
                </div>
              </div>
            </details>
            {/* 追加FAQ */}
            <details className="group overflow-hidden rounded-xl border border-gray-100 bg-white transition-colors duration-200 hover:border-red-100">
              <summary className="flex list-none items-center gap-3 px-5 py-4 cursor-pointer">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-sm font-bold text-red-800">
                  Q
                </span>
                <span className="flex-1 text-[16px] font-semibold leading-6 text-gray-800">
                  買取の際に必要なものはありますか？
                </span>
                <i className="ri-arrow-down-s-line text-lg text-gray-400 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-5 pb-4">
                <div className="flex items-start gap-3 border-t border-gray-100 pt-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b21b1b] text-xs font-bold text-white">
                    A
                  </span>
                  <p className="text-[14px] leading-6 text-gray-600">
                    はい。古物営業法の規定により、お買取の際は本人確認書類（運転免許証・マイナンバーカードなど）が必要となります。お忘れなくお持ちください。
                  </p>
                </div>
              </div>
            </details>
          </div>
        </div>
      </section>

      <section id="store" className="bg-white px-4 py-10 md:px-6 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-[10px] font-semibold tracking-[0.25em] text-[#b3261e]">
              STORE INFO
            </p>
            <h2 className="mt-2 text-xl font-bold md:text-3xl font-serif text-[#111827]">
              店舗情報
            </h2>
            <div className="mx-auto mt-3 h-[2px] w-10 bg-[#b3261e]" />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            
            {/* 地図 */}
            <div className="overflow-hidden rounded-[1.25rem] bg-white shadow-sm h-full min-h-[380px]">
              <iframe
                title="あなたの鑑定士 関目店の地図"
                src="https://www.google.com/maps?cid=1811997118710577813&hl=ja&z=17&output=embed"
                className="h-full min-h-[380px] w-full border-0"
                loading="lazy"
              />
            </div>

            {/* 右 */}
            <div className="flex h-full flex-col justify-between lg:min-h-[380px]">
              <div>
                <h3 className="text-xl font-bold font-serif md:text-2xl text-[#111827]">
                  あなたの鑑定士 関目店
                </h3>
                <p className="mt-1 text-sm text-zinc-500">買取専門店</p>

                <div className="mt-5 space-y-4">
                  
                  {/* 住所 */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-xl shrink-0">
                      <i className="ri-map-pin-line text-red-800"></i>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400">住所</p>
                      <p className="mt-1 text-sm font-semibold text-[#1f2937] leading-6">
                        〒536-0007<br />
                        大阪市城東区成育5丁目9-11
                      </p>
                    </div>
                  </div>

                  {/* 電話 */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-xl shrink-0">
                      <i className="ri-phone-line text-red-800"></i>
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-400">フリーダイヤル</p>
                      <a
                        href="tel:0120921464"
                        className="mt-1 inline-block text-base font-bold text-[#b3261e]"
                      >
                        0120-921-464
                      </a>
                    </div>
                  </div>

                  {/* 営業時間 */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-xl shrink-0">
                      <i className="ri-time-line text-red-800"></i>
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-400">営業時間</p>
                      <p className="mt-1 text-sm font-semibold text-[#1f2937]">
                        10:00〜19:00（水曜定休）
                      </p>
                    </div>
                  </div>

                  {/* アクセス */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-xl shrink-0">
                      <i className="ri-road-map-line text-red-800"></i>
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-400">アクセス</p>
                      <p className="mt-1 text-sm font-semibold text-[#1f2937] leading-6">
                        関目成育駅 徒歩1分<br />
                        関目駅 徒歩1分
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* ボタン */}
              <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <a
                  href="tel:0120921464"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg bg-[#b21717] px-4 text-xs font-bold text-white"
                >
                  電話で問い合わせる
                </a>

                <a
                  href="https://www.google.com/maps?cid=1811997118710577813"
                  target="_blank"
                  className="inline-flex min-h-[44px] flex-1 items-center justify-center rounded-lg border border-[#efb7b2] bg-white px-4 text-xs font-bold text-[#b3261e]"
                >
                  Googleマップで見る
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <footer className="bg-[#f5f5f5] px-4 py-10 md:px-6 md:py-12">
        <div className="mx-auto max-w-6xl">
          
          {/* 上段 */}
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            
            {/* ロゴ */}
            <a href="#top">
              <Image
                src="/img/logo-red.svg"
                alt="あなたの鑑定士"
                width={140}
                height={40}
                className="h-auto w-[140px]"
              />
            </a>

            {/* メニュー */}
            <nav className="flex flex-wrap items-center gap-5 text-sm text-gray-600 md:justify-end">
              <a href="#flow" className="hover:text-[#C5292B]">ご利用の流れ</a>
              <a href="#reason" className="hover:text-[#C5292B]">選ばれる理由</a>
              <a href="#items" className="hover:text-[#C5292B]">買取品目</a>
              <a href="#faq" className="hover:text-[#C5292B]">よくあるご質問</a>
              <a href="#store" className="hover:text-[#b3261e]">店舗情報</a>
            </nav>

          </div>

          {/* 区切り線 */}
          <div className="mt-8 border-t border-[#e5e5e5]" />

          {/* 下段（コピーライト） */}
          <div className="mt-6 flex flex-col gap-2 text-xs text-gray-500 leading-6 md:flex-row md:items-center md:justify-between">
            <p>© 2024 あなたの鑑定士. All rights reserved.</p>
            <p className="md:text-right">
              大阪市城東区の買取専門店 あなたの鑑定士 関目店
            </p>
          </div>

        </div>
      </footer>
    </main>
  );
}