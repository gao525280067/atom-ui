import React from 'react';

const Foo = ({ title }: { title: string }) => <h1>{title}</h1>;

export default React.memo(Foo);
