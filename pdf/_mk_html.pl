#!/usr/bin/env perl
use strict;
use warnings;
use 5.010001;

my $dir = './';

say "<ul>";
opendir(DIR, $dir) or die $!;
while (my $file = readdir(DIR)) {
    next if ($file =~ m/^\./);
    next if ($file =~ m/^_/);
    next unless ($file =~ m/\.html$/);

    #print "$file\n";

    my $title = $file;
    $title =~ s/ElectroSmash - //i;
    $title =~ s/.html$//i;

    $file =~ s/ /%20/g;
    my $pdf = $file;
    $pdf =~ s/\.html/\.pdf/;

    #say qq{<li><a href="$file">$title</a> [<a href="$pdf">PDF</a>]</li>};
    say qq{<li><a href="$pdf">$title</a>};
}
say "</ul>";

closedir(DIR);
