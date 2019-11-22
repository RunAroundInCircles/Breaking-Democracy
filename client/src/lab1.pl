allzero([L]).
allzero([H|T]) :- (H==0 -> writeln('true'); writeln('false')).
