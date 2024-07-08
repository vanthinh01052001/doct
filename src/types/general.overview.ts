export type TCardOverview = {
  key: number;
  amount: string;
  title: string;
  icon: JSX.Element;
  bgColor: string;
}

export type TCardAppointment = {
  key: number;
  img: string,
  title: string,
  time: string,
  textBtn: string,
  bgColor: string,
  textColorBtn: string
}

export type TCardPatients = {
  key: number;
  icon: any;
  amount: string;
  title: string;
  bgColor: string;
  trending: string;
}

export type TCardTodayAppointment = {
  key: number;
  img: string;
  title: string;
  subTitle: string;
  time: string;
}

export type TCardRecentPatiens = {
  key: number;
  img: string;
  title: string;
  visitId: string;
  date: string;
  gender: string;
  diseases: string;
  status: string;
  actionIcon: JSX.Element;
}